import { Channel } from 'amqplib';
import { DataSource } from 'typeorm';
import { Task } from '../task/task';
import { mainLogger } from '../../../winston';
import {
  SubgraphTaskMessage,
  SubgraphTaskResult,
  SubgraphTaskTypes,
} from './types';
import { TaskSubgraph } from '../../../../entities';
import { SubgraphService } from '../../../subgraph';
import { MessageHeaders } from '../../types';
import { exchanges, queues } from '../../../amqp/constants';

export class SubgraphTask extends Task {
  private readonly dataSource: DataSource;

  private readonly subgraphService: SubgraphService;

  constructor(
    channel: Channel,
    dataSource: DataSource,
    subgraphService: SubgraphService,
  ) {
    const logger = mainLogger.child({ scope: 'subgraph.task' });
    super(channel, queues.task.SUBGRAPH, exchanges.result.SUBGRAPH, logger);
    this.dataSource = dataSource;
    this.subgraphService = subgraphService;
  }

  async handler(msg) {
    const headers = <MessageHeaders>msg.properties.headers;
    try {
      const data: SubgraphTaskMessage = JSON.parse(msg.content.toString());

      switch (data.type) {
        case SubgraphTaskTypes.MARKET_ACCOUNTS: {
          await this.getMarketAccounts(
            headers,
            data.networkId,
            data.market,
            data.blockNumber,
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
      await this.handleError(headers, err.message);
      this.channel.ack(msg);
    }
  }

  async getMarketAccounts(
    headers: MessageHeaders,
    networkId: number,
    market: string,
    blockNumber: number,
    first = 1000,
  ): Promise<void> {
    let taskHelper = await this.dataSource.manager.findOne(TaskSubgraph, {
      where: {
        jobId: headers.jobId,
        type: SubgraphTaskTypes.MARKET_ACCOUNTS,
      },
    });

    if (taskHelper?.finished) {
      return;
    }

    if (!taskHelper) {
      taskHelper = new TaskSubgraph();
      taskHelper.jobId = headers.jobId;
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
        taskHelper.finished = false;
        await this.dataSource.manager.save(taskHelper);
        throw new Error(result.errors[0].message);
      }

      const { accounts } = result.data;
      taskHelper.skip += first;
      taskHelper.count += accounts.length;

      if (taskHelper.count < taskHelper.skip || accounts.length === 0) {
        taskHelper.finished = true;
      }

      const message: SubgraphTaskResult = {
        accounts,
      };
      // send to result exchange
      this.channel.publish(
        this.resultExchange,
        '',
        Buffer.from(JSON.stringify(message)),
        { headers },
      );

      // update task helper
      await this.dataSource.manager.save(taskHelper);

      // return task helper
    } while (!taskHelper.finished);
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
