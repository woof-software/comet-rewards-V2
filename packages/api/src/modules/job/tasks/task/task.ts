import { Channel, Message } from 'amqplib';
import { Logger } from 'winston';
import { ResultExchanges, TaskQueues } from '../../constants';
import { Handler } from '../../types';
import { errors } from './task.messages';

/**
 * @classdesc This is the generic class for all tasks and should not be used directly in task definition
 * */
export class Task implements Handler {
  protected readonly logger: Logger;

  readonly channel: Channel;

  readonly queueName: TaskQueues;

  readonly resultExchange: ResultExchanges;

  protected consumerTag_: string;

  constructor(
    channel: Channel,
    queueName: TaskQueues,
    resultExchange: ResultExchanges,
    logger: Logger,
  ) {
    this.logger = logger;
    this.channel = channel;
    this.queueName = queueName;
    this.resultExchange = resultExchange;
  }

  get consumerTag() {
    return this.consumerTag_;
  }

  /**
   * @desc Register consumer for task queue with task handler
   * */
  async registerHandler() {
    if (this.consumerTag_) {
      throw errors.handlerRegistered();
    }
    const consumer = await this.channel.consume(
      this.queueName,
      this.handler.bind(this),
      {
        noAck: false,
      },
    );
    this.consumerTag_ = consumer.consumerTag;
  }

  /**
   * @desc Disconnect task consumer
   * */
  async unregisterHandler() {
    if (this.consumerTag_) {
      await this.channel.cancel(this.consumerTag_);
      delete this.consumerTag_;
      this.logger.info('consumer disconnected');
    }
  }

  async handler(msg: Message) {
    throw errors.genericHandlerMessage(msg.properties.messageId);
  }
}
