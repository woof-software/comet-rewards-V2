import { Channel } from 'amqplib';
import {
  assert,
  createStubInstance,
  define,
  fake,
  replace,
  restore,
} from 'sinon';

import {
  constructAmqpMessage,
  generateArray,
} from '../../../../utils/test-helper.test';
import { SubgraphTaskMessage, SubgraphTaskTypes } from './types';
import { SubgraphTask } from './subgraph.task';
import { getDataSourceStubs } from '../../../../utils/stubs.test';
import { SubgraphService } from '../../../subgraph/subgraph.service';
import { errors } from './messages';
import { TaskSubgraph } from '../../../../entities';

describe('subgraph.task', () => {
  const channel = <Channel>{};
  const { dataSourceStub, entityManagerStub } = getDataSourceStubs();
  const subgraphServiceStub = createStubInstance(SubgraphService);
  const subgraphTask = new SubgraphTask(
    channel,
    dataSourceStub,
    subgraphServiceStub,
  );

  const msg: SubgraphTaskMessage = {
    market: '0xc3d688B66703497DAA19211EEdff47f25384cdc3',
    networkId: 1,
    type: SubgraphTaskTypes.MARKET_ACCOUNTS,
    args: {
      campaignId: 123,
      blockNumber: 19474153,
    },
  };

  describe('handler', () => {
    afterEach(restore);
    const jobId = 1;

    it('if task type unknown send error', async () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      replace(msg, 'type', 'unknown');

      const handleErrorFake = fake.returns(Promise.resolve());
      replace(subgraphTask, 'handleError', handleErrorFake);

      const ackFake = fake();
      define(channel, 'ack', ackFake);

      const amqpMessage = constructAmqpMessage(msg, { jobId });
      await subgraphTask.handler(amqpMessage);

      assert.calledWith(
        handleErrorFake,
        jobId,
        errors.unknownTaskType().message,
      );
      assert.calledOnceWithMatch(ackFake, amqpMessage);
    });
    it('market_accounts task should be handled correctly', async () => {
      const ackFake = fake();
      define(channel, 'ack', ackFake);

      const getMarketAccountsFake = fake.returns(Promise.resolve());
      replace(subgraphTask, 'getMarketAccounts', getMarketAccountsFake);

      const amqpMessage = constructAmqpMessage(msg, { jobId });
      await subgraphTask.handler(amqpMessage);

      assert.calledWith(
        getMarketAccountsFake,
        jobId,
        msg.networkId,
        msg.market,
        msg.args.blockNumber,
      );
      assert.calledOnceWithMatch(ackFake, amqpMessage);
    });
  });

  describe('getMarketAccounts', () => {
    const jobId = 1;

    const taskHelper: any = {
      jobId,
      type: SubgraphTaskTypes.MARKET_ACCOUNTS,
      count: 0,
      skip: 0,
      finished: false,
    };

    it('if taskHelper.finished is true, should return to acknowledgement', async () => {
      replace(taskHelper, 'finished', true);
      entityManagerStub.findOne.returns(taskHelper);

      await subgraphTask.getMarketAccounts(1, 1, '', 1);

      assert.notCalled(subgraphServiceStub.getAccounts);
    });
    it('if no taskHelper record, should create new', async () => {
      // dataSource.manager.findOne is a stub and return empty value now

      const publishFake = fake();
      define(channel, 'publish', publishFake);

      const accounts1 = generateArray();

      subgraphServiceStub.getAccounts.onFirstCall().returns(
        Promise.resolve({
          data: {
            accounts: accounts1,
          },
        }),
      );

      const accounts2 = generateArray(9);

      subgraphServiceStub.getAccounts.onSecondCall().returns(
        Promise.resolve({
          data: {
            accounts: accounts2,
          },
        }),
      );

      await subgraphTask.getMarketAccounts(jobId, 1, '', 1, 10);
      expect(entityManagerStub.save.args.length).toEqual(3);
      // eslint-disable-next-line
      // @ts-ignore
      const lastSave: TaskSubgraph = entityManagerStub.save.args[2][0];
      expect(lastSave.count).toEqual(accounts1.length + accounts2.length);
      expect(lastSave.skip).toEqual(accounts1.length * 2);
      expect(lastSave.finished).toEqual(true);
    });
    it('if subgraph returned error, throw error', async () => {
      // dataSource.manager.findOne is a stub and return empty value now

      const error = 'error';
      subgraphServiceStub.getAccounts.returns(
        Promise.resolve({
          errors: [error],
        }),
      );

      try {
        await subgraphTask.getMarketAccounts(jobId, 1, '', 1, 10);
        assert.fail('should throw error');
      } catch (err) {
        expect(err.message).toEqual(error);
      }
    });
  });
});
