import { Channel, Message, Replies } from 'amqplib';
import { assert, define, fake, replace, restore } from 'sinon';
import { Task } from './task';
import { ResultExchanges, TaskQueues } from '../../constants';
import { mainLogger } from '../../../winston';
import { errors } from './task.messages';

describe('task', () => {
  const channelStub = <Channel>{};
  const logger = mainLogger;
  const queue = TaskQueues.SUBGRAPH;
  const exchange = ResultExchanges.SUBGRAPH;

  describe('constructor', () => {
    it('constructor should set class properties correctly', () => {
      const task = new Task(channelStub, queue, exchange, logger);
      expect(task.channel).toEqual(channelStub);
      expect(task.queueName).toEqual(queue);
      expect(task.resultExchange).toEqual(exchange);
    });
  });

  describe('registerHandler()', () => {
    const task = new Task(channelStub, queue, exchange, logger);

    afterEach(restore);

    it('should register consumer', async () => {
      const handlerFake = fake();
      replace(task, 'handler', handlerFake);
      const consumer: Replies.Consume = {
        consumerTag: 'consumer',
      };
      const consumeFake = fake.returns(consumer);
      define(channelStub, 'consume', consumeFake);

      await task.registerHandler();
      expect(task.consumerTag).toEqual(consumer.consumerTag);
      assert.calledWith(consumeFake, queue, handlerFake, { noAck: false });
    });

    it('if handler already registered, should throw error', async () => {
      const consumer: Replies.Consume = {
        consumerTag: 'consumer',
      };
      const consumeFake = fake.returns(consumer);
      define(channelStub, 'consume', consumeFake);

      if (!task.consumerTag) {
        await task.registerHandler();
      }

      try {
        await task.registerHandler();
        assert.fail('should throw error');
      } catch (err) {
        expect(err).toEqual(errors.handlerRegistered());
      }
    });
  });

  describe('unregisterHandler', () => {
    const task = new Task(channelStub, queue, exchange, logger);

    afterEach(restore);

    it('if consumer is registered, should detach consumer', async () => {
      const cancelFake = fake();
      define(channelStub, 'cancel', cancelFake);
      const consumerTag = 'tag';
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      task.consumerTag_ = 'tag';

      await task.unregisterHandler();
      assert.calledOnceWithExactly(cancelFake, consumerTag);
    });

    it('if consumer is not registered should do nothing', async () => {
      const cancelFake = fake();
      define(channelStub, 'cancel', cancelFake);
      await task.unregisterHandler();
      assert.notCalled(cancelFake);
    });
  });

  describe('handler', () => {
    const task = new Task(channelStub, queue, exchange, logger);

    it('invoked generic handler should throw error', async () => {
      const message = <Message>{
        properties: { messageId: 1 },
      };
      try {
        await task.handler(message);
        assert.fail('should throw error');
      } catch (err) {
        expect(err).toEqual(
          errors.genericHandlerMessage(message.properties.messageId),
        );
      }
    });
  });
});
