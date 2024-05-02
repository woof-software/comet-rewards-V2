import '../../../utils/test-helper.test';
import { assert, createStubInstance, define, fake } from 'sinon';
import { Channel } from 'amqplib';
import { TaskService } from './task.service';
import { AmqpService } from '../../amqp/amqp.service';
import { mainLogger } from '../../winston';
import { ResultExchanges, TaskQueues } from '../constants';
import { getDataSourceStubs } from '../../../utils/stubs.test';

describe('task.service', () => {
  const amqpServiceStub = createStubInstance(AmqpService);

  const channel = <Channel>{};
  amqpServiceStub.getChannel.returns(Promise.resolve(channel));
  let taskService: TaskService;
  const { dataSourceStub } = getDataSourceStubs();

  beforeAll(() => {
    taskService = new TaskService(amqpServiceStub, dataSourceStub, mainLogger);
  });

  describe('registerTaskQueues', () => {
    it('all queues from TaskQueues enum should be registered', async () => {
      const assertQueueFake = fake((queueName, options) => {
        assert.match(options, { durable: true });
        return Promise.resolve({ queue: queueName });
      });
      define(channel, 'assertQueue', assertQueueFake);

      await taskService.registerTaskQueues();

      expect(taskService.queues).toEqual(
        expect.arrayContaining(Object.values(TaskQueues)),
      );
    });
  });

  describe('registerResultExchanges', () => {
    it('all exchanges from ResultExchanges enum should be registered', async () => {
      const assertExchangeFake = fake((exchangeName, type, options) => {
        assert.match(type, 'headers');
        assert.match(options, { durable: true });
        return Promise.resolve({ exchange: exchangeName });
      });
      define(channel, 'assertExchange', assertExchangeFake);

      await taskService.registerResultExchanges();

      expect(taskService.exchanges).toEqual(
        expect.arrayContaining(Object.values(ResultExchanges)),
      );
    });
  });
});
