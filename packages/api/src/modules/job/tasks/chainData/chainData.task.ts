import { Channel, Message } from 'amqplib';
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

  async handler(msg: Message) {
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
          return this.handleError(
            new Error('ChainDataTask: Unknown task action type'),
            msg,
            headers,
          );
        }
      }

      return this.channel.ack(msg);
    } catch (err) {
      this.logger.error(err.message);
      return this.handleError(err, msg, headers);
    }
  }

  async getAccrued(
    headers: MessageHeaders,
    networkId: number,
    market: string,
    blockNumber: number,
    address: string,
  ) {
    const provider = await this.providerService.getProviderRPC(networkId);
    const cometRewards = new CometRewardsContract(
      provider,
      networkId,
      market,
    ).getInstance();

    await this.tokenBucketService.consumeToken();
    const result: any = await cometRewards.methods
      .getRewardOwed(market, address)
      .call({}, blockNumber);

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
  }

  /**
   * @desc Handle error inside task, send error message to result exchange
   * */
  async handleError(error: any, msg: Message, headers: MessageHeaders) {
    console.log();
    if (error.innerError) {
      switch (error.innerError.code) {
        case -32005:
        case -32001:
        case -32002: {
          return this.channel.nack(msg, false, true);
        }
        default: {
          break;
        }
      }
    }

    const message = {
      error: error.message,
    };
    this.channel.publish(
      this.resultExchange,
      '',
      Buffer.from(JSON.stringify(message)),
      { headers },
    );
    return this.channel.ack(msg);
  }
}
