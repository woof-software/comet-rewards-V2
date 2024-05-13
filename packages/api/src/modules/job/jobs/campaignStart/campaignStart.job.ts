import { Logger } from 'winston';
import { Channel } from 'amqplib';
import { DataSource } from 'typeorm';

import { JobEntity } from '../../../../entities/job.entity';
import { JobManager, MessageHeaders, StageHandler } from '../../types';
import { JobStatus } from '../../constants';
import { CompletionStage } from './stages/completion/completion.stage';
import { exchanges, queues } from '../../../amqp/constants';
import { ParserAddressesStage } from './stages/parserAddresses/parserAddresses.stage';
import { AccountAccruedStage } from './stages/accountAccrued/accountAccrued.stage';
import { ParserAddressesTaskMessage } from '../../tasks/parserAddresses/types';
import { MerkleStage } from './stages/merkle/merkle.stage';

export class CampaignStartJob implements JobManager {
  private readonly logger: Logger;

  job: JobEntity;

  stageHandlers: StageHandler[] = [];

  completionHandler: StageHandler;

  constructor(
    private readonly channel: Channel,
    private readonly dataSource: DataSource,
    mainLogger: Logger,
    job: JobEntity,
  ) {
    this.logger = mainLogger.child({
      scope: `job ${job.id} campaignStart.manager`,
    });
    this.job = job;
  }

  async startJob(): Promise<JobEntity> {
    await this.registerCompletionHandler();

    if (this.job.status !== JobStatus.FINISHING) {
      // assign stage handlers
      await this.registerStageHandlers();
    }

    if (this.job.status === JobStatus.REGISTERED) {
      const message: ParserAddressesTaskMessage = {
        networkId: this.job.args.networkId,
        market: this.job.args.market,
        blockNumber: this.job.args.blockNumber,
      };
      const headers: MessageHeaders = { jobId: this.job.id };

      this.channel.sendToQueue(
        queues.task.PARSER_ADDRESSES,
        Buffer.from(JSON.stringify(message)),
        { headers },
      );

      this.job.status = JobStatus.RUNNING;
      await this.dataSource.manager.save(this.job);
    }

    return this.job;
  }

  private async registerStageHandlers() {
    const parserAddressesStage = new ParserAddressesStage(
      this.channel,
      exchanges.result.PARSER_ADDRESSES,
      this.job,
    );
    this.stageHandlers.push(parserAddressesStage);
    await parserAddressesStage.registerHandler();

    const accountAccruedStage = new AccountAccruedStage(
      this.channel,
      exchanges.result.CHAIN_DATA,
      this.job,
      this.dataSource,
    );
    this.stageHandlers.push(accountAccruedStage);
    await accountAccruedStage.registerHandler();

    const merkleStage = new MerkleStage(
      this.channel,
      exchanges.result.MERKLE,
      this.job,
      this.dataSource,
    );
    this.stageHandlers.push(merkleStage);
    await merkleStage.registerHandler();
  }

  private async registerCompletionHandler() {
    await this.channel.assertExchange(exchanges.COMPLETION, 'headers', {
      durable: true,
    });

    this.completionHandler = new CompletionStage(
      this.channel,
      exchanges.COMPLETION,
      this.job,
      this.stageHandlers,
      this.dataSource,
    );
    await this.completionHandler.registerHandler();
  }
}
