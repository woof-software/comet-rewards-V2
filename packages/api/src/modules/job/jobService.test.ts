import {
  assert,
  createStubInstance,
  fake,
  replace,
  restore,
  SinonStubbedInstance,
} from 'sinon';
import { Logger } from 'winston';
import { JobService } from './job.service';
import { JobStatus, JobType } from './constants';
import { CampaignStartManager } from './jobs/campaignStart/campaignStart.manager';
import { Job } from '../../entities/job.entity';
import { AmqpService } from '../amqp/amqp.service';
import { getDataSourceStubs } from '../../utils/stubs.test';

describe('job.service', () => {
  let jobService: JobService;

  let loggerStub: SinonStubbedInstance<Logger>;
  let amqpServiceStub: SinonStubbedInstance<AmqpService>;

  const { dataSourceStub, entityManagerStub } = getDataSourceStubs();

  beforeAll(async () => {
    loggerStub = createStubInstance(Logger);
    amqpServiceStub = createStubInstance(AmqpService);
    jobService = new JobService(dataSourceStub, amqpServiceStub, loggerStub);
  });

  describe('getKey', () => {
    afterAll(() => {
      restore();
    });
    it('get key for campaign_start job call CampaignStartManager.getKey', () => {
      const getKeySpy = fake();
      replace(CampaignStartManager, 'getKey', getKeySpy);
      jobService.getKey(JobType.CAMPAIGN_START, {});
      assert.called(getKeySpy);
    });

    it('unknown job type should throw error', () => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        jobService.getKey('unknown', []);
      } catch (err) {
        expect(err.message).toBeTruthy();
      }
      assert.fail('should throw error');
    });
  });

  describe('registerJob', () => {
    it('if job already registered, return entity', async () => {
      const jobExists = new Job();
      jobExists.key = 'key';
      entityManagerStub.findOne.returns(Promise.resolve(jobExists));
      const res = await jobService.registerJob(JobType.CAMPAIGN_START, '', {});
      expect(res).toContainEqual(jobExists);
    });

    it('register new job, should be ok', async () => {
      const type = JobType.CAMPAIGN_START;
      const key = 'key';
      const args = {
        arg1: '1',
        arg2: 2,
      };

      const job = new Job();
      job.key = key;
      job.type = type;
      job.args = args;
      job.status = JobStatus.REGISTERED;

      const res = await jobService.registerJob(type, key, args);

      assert.calledOnceWithExactly(entityManagerStub.save, Job, job);
      expect(res).toEqual(job);
    });
  });
});
