import { Channel } from 'amqplib';
import { DataSource } from 'typeorm';
import { Logger } from 'winston';
import { Task } from '../task/task';
import {
  ChainDataTaskMessage,
  ChainDataTaskResult,
  ChainDataTaskType,
} from './types';
import { MessageHeaders } from '../../types';
import { ProviderService } from '../../../providers/providerService';
import { CometRewardsContract } from '../../../contracts/cometReward/cometRewards.contract';
import { exchanges, queues } from '../../../amqp/constants';
import { TokenBucketService } from '../../../tokenBucket/tokenBucket.service';

export class ChainDataTask extends Task {
  private readonly dataSource: DataSource;

  constructor(
    channel: Channel,
    private readonly providerService: ProviderService,
    private readonly tokenBucketService: TokenBucketService,
    mainLogger: Logger,
  ) {
    const logger = mainLogger.child({ scope: 'chainData.task' });
    super(channel, queues.task.CHAIN_DATA, exchanges.result.CHAIN_DATA, logger);
  }

  async handler(msg) {
    const headers = <MessageHeaders>msg.properties.headers;
    try {
      const data: ChainDataTaskMessage = JSON.parse(msg.content.toString());

      switch (data.type) {
        case ChainDataTaskType.ACCRUED: {
          await this.getAccrued(
            headers,
            data.networkId,
            data.market,
            data.blockNumber,
            data.address,
          );
          break;
        }
        default: {
          // TODO: finish job with error
          this.logger.error('Unknown task type');
          break;
        }
      }

      this.channel.ack(msg);
    } catch (err) {
      this.logger.error(err.message);
      // await this.handleError(headers, err.message);
      this.channel.ack(msg);
    }
  }

  async getAccrued(
    headers: MessageHeaders,
    networkId: number,
    market: string,
    blockNumber: number,
    address: string,
  ) {
    try {
      const provider = await this.providerService.getProviderRPC(networkId);
      const cometRewards = new CometRewardsContract(
        provider,
        networkId,
        market,
      ).getInstance();

      const token = await this.tokenBucketService.consumeToken();
      this.logger.info(`consumed ${token}`);
      const result: any = await cometRewards.methods
        .getRewardOwed(market, address)
        .call({}, blockNumber);
      this.logger.info(`received result ${token}`);

      const message: ChainDataTaskResult = {
        address,
        accrued: result.owed.toString(),
      };

      this.channel.publish(
        this.resultExchange,
        '',
        Buffer.from(JSON.stringify(message)),
        { headers },
      );
    } catch (err) {
      this.logger.error(err.message);
      await this.handleError(headers, err.message);
    }
  }

  /**
   * @desc Handle error inside task, send error message to result exchange
   * */
  async handleError(headers: MessageHeaders, error: string) {
    const message = {
      error,
    };
    this.channel.publish(
      this.resultExchange,
      '',
      Buffer.from(JSON.stringify(message)),
      { headers },
    );
  }
}