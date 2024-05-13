import { Channel } from 'amqplib';
import { DataSource, LessThanOrEqual } from 'typeorm';
import { Task } from '../task/task';
import { mainLogger } from '../../../winston';
import { ParserAddressesTaskMessage, ParserAddressesTaskResult } from './types';
import { SubgraphService } from '../../../subgraph';
import { MessageHeaders } from '../../types';
import { exchanges, queues } from '../../../amqp/constants';
import { ParserAddressEntity } from '../../../../entities/parserAddress.entity';
import { TaskParserAddressesEntity } from '../../../../entities/taskParserAddresses.entity';

export class ParserAddressesTask extends Task {
  private readonly dataSource: DataSource;

  private readonly subgraphService: SubgraphService;

  constructor(channel: Channel, dataSource: DataSource) {
    const logger = mainLogger.child({ scope: 'parserAddresses.task' });
    super(
      channel,
      queues.task.PARSER_ADDRESSES,
      exchanges.result.PARSER_ADDRESSES,
      logger,
    );
    this.dataSource = dataSource;
  }

  async handler(msg) {
    const headers = <MessageHeaders>msg.properties.headers;
    try {
      const data: ParserAddressesTaskMessage = JSON.parse(
        msg.content.toString(),
      );

      const message: ParserAddressesTaskResult = {
        addresses: await this.dataSource.manager.find(ParserAddressEntity, {
          where: {
            networkId: data.networkId,
            fromBlock: LessThanOrEqual(data.blockNumber),
            contractAddress: data.market,
          },
        }),
      };

      const taskHelper = new TaskParserAddressesEntity();
      taskHelper.jobId = headers.jobId;
      taskHelper.count = message.addresses.length;
      await this.dataSource.manager.save(taskHelper);

      this.channel.publish(
        this.resultExchange,
        '',
        Buffer.from(JSON.stringify(message)),
        { headers },
      );

      this.channel.ack(msg);
    } catch (err) {
      this.logger.error(err.message);
      await this.handleError(headers, err.message);
      this.channel.ack(msg);
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
