import { Logger } from 'winston';
import { Channel, Replies } from 'amqplib';
import { MessageHeaders, StageHandler } from '../../../../types';
import { Job } from '../../../../../../entities/job.entity';
import { mainLogger } from '../../../../../winston';
import { CompletionMessage } from '../completion/types';
import {
  ChainDataTaskMessage,
  ChainDataTaskType,
} from '../../../../tasks/chainData/types';
import { exchanges, queues } from '../../../../../amqp/constants';
import { ParserAddressesTaskResult } from '../../../../tasks/parserAddresses/types';

export class ParserAddressesStage implements StageHandler {
  readonly queueName: string;

  private readonly logger: Logger;

  private consumer: Replies.Consume;

  constructor(
    readonly channel: Channel,
    readonly resultExchange: string,
    readonly job: Job,
  ) {
    this.logger = mainLogger.child({
      scope: `job ${job.id} parserAddresses.stage`,
    });
    this.queueName = `${this.job.type}_parser_addresses_stage_${this.job.id}`;
  }

  registerHandler = async () => {
    const bindingArgs = {
      jobId: this.job.id,
    };
    await this.channel.assertQueue(this.queueName, {
      durable: true,
    });
    await this.channel.bindQueue(
      this.queueName,
      this.resultExchange,
      '',
      bindingArgs,
    );
    this.consumer = await this.channel.consume(
      this.queueName,
      this.handler.bind(this),
      { noAck: false },
    );
  };

  async unregisterHandler() {
    await this.channel.deleteQueue(this.queueName);
    await this.channel.cancel(this.consumer.consumerTag);
    delete this.consumer;
  }

  async handler(msg) {
    if (!msg) {
      return null;
    }
    const result: ParserAddressesTaskResult = JSON.parse(
      msg.content.toString(),
    );
    const { headers } = msg.properties;
    if (result.error) {
      this.error(result.error, headers);
      return this.channel.ack(msg);
    }

    if (!result.addresses.length) {
      return this.error('no addresses from parser', headers);
    }

    for (let i = 0; i < result.addresses.length; i += 1) {
      const message: ChainDataTaskMessage = {
        type: ChainDataTaskType.ACCRUED,
        market: this.job.args.market,
        blockNumber: this.job.args.blockNumber,
        networkId: this.job.args.networkId,
        address: result.addresses[i].address,
      };
      this.channel.sendToQueue(
        queues.task.CHAIN_DATA,
        Buffer.from(JSON.stringify(message)),
        { headers, deliveryMode: 2 },
      );
    }

    return this.channel.ack(msg);
  }

  error(error: string, headers: MessageHeaders) {
    const message: CompletionMessage = {
      error,
    };
    this.channel.publish(
      exchanges.COMPLETION,
      '',
      Buffer.from(JSON.stringify(message)),
      { headers },
    );
  }
}
