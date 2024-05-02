import { Channel } from 'amqplib';
import { DataSource } from 'typeorm';
import { ResultExchanges, TaskQueues } from '../../constants';
import { Task } from '../task/task';
import { mainLogger } from '../../../winston';
import { SubgraphTaskMessage, SubgraphTaskTypes } from './types';
import { TaskHelperSubgraph } from '../../../../entities';
import { SubgraphService } from '../../../subgraph/subgraph.service';
import { errors } from './messages';

export class SubgraphTask extends Task {
  private readonly dataSource: DataSource;

  private readonly subgraphService: SubgraphService;

  constructor(
    channel: Channel,
    dataSource: DataSource,
    subgraphService: SubgraphService,
  ) {
    const logger = mainLogger.child({ scope: 'subgraph.task' });
    super(channel, TaskQueues.SUBGRAPH, ResultExchanges.SUBGRAPH, logger);
    this.dataSource = dataSource;
    this.subgraphService = subgraphService;
  }

  async handler(msg) {
    const { jobId } = msg.properties.headers;
    try {
      const data: SubgraphTaskMessage = JSON.parse(msg.content.toString());

      switch (data.type) {
        case SubgraphTaskTypes.MARKET_ACCOUNTS: {
          const { blockNumber } = data.args;
          await this.getMarketAccounts(
            jobId,
            data.networkId,
            data.market,
            blockNumber,
          );
          break;
        }
        default: {
          throw errors.unknownTaskType();
        }
      }

      this.channel.ack(msg);
    } catch (err) {
      this.logger.error(err.message);
      await this.handleError(jobId, err.message);
      this.channel.ack(msg);
    }
  }

  async getMarketAccounts(
    jobId: number,
    networkId: number,
    market: string,
    blockNumber: number,
    first = 1000,
  ): Promise<void> {
    let taskHelper = await this.dataSource.manager.findOne(TaskHelperSubgraph, {
      where: {
        jobId,
      },
    });

    if (taskHelper?.finished) {
      return;
    }

    if (!taskHelper) {
      taskHelper = new TaskHelperSubgraph();
      taskHelper.jobId = jobId;
      taskHelper.type = SubgraphTaskTypes.MARKET_ACCOUNTS;
      taskHelper.skip = 0;
      taskHelper.count = 0;
      taskHelper.finished = false;
      await this.dataSource.manager.save(taskHelper);
    }

    do {
      // TODO: set pagination value to task config or global config
      const result = await this.subgraphService.getAccounts(
        networkId,
        market,
        blockNumber,
        taskHelper.skip,
        first,
      );
      if (result.errors?.length) {
        throw new Error(result.errors[0]);
      }

      const { accounts } = result.data;
      taskHelper.skip += first;
      taskHelper.count += accounts.length;

      if (taskHelper.count < taskHelper.skip || accounts.length === 0) {
        taskHelper.finished = true;
      }

      const message = {
        accounts,
      };
      // send to result exchange
      this.channel.publish(
        this.resultExchange,
        '',
        Buffer.from(JSON.stringify(message)),
      );

      // update task helper
      await this.dataSource.manager.save(taskHelper);

      // return task helper
    } while (!taskHelper.finished);
  }

  /**
   * @desc Handle error inside task, send error message to result exchange
   * */
  async handleError(jobId: number, error: string) {
    const message = {
      error,
    };
    this.channel.publish(
      this.resultExchange,
      '',
      Buffer.from(JSON.stringify(message)),
      { headers: jobId },
    );
  }
}
