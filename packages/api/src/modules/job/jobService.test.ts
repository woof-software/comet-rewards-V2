import { assert, createStubInstance, SinonStubbedInstance } from 'sinon';
import { Logger } from 'winston';
import { JobService } from './job.service';
import { JobStatus, JobType } from './constants';
import { JobEntity } from '../../entities/job.entity';
import { AmqpService } from '../amqp';
import { getDataSourceStubs } from '../../utils/stubs.test';
import { errors } from './messages';

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

  describe('registerJob', () => {
    it('register new job should be ok', async () => {
      const type = JobType.CAMPAIGN_START;
      const args = {
        arg1: '1',
        arg2: 2,
      };

      const job = new JobEntity();
      job.type = type;
      job.args = args;
      job.status = JobStatus.REGISTERED;

      const res = await jobService.registerJob(type, args);

      assert.calledOnceWithExactly(entityManagerStub.save, JobEntity, job);
      expect(res).toEqual(job);
    });
  });

  describe('startJob', () => {
    it('if no job was found by id, throw error', async () => {
      const id = -1;
      entityManagerStub.findOne.resolves(null);

      try {
        await jobService.startJob(id);
        assert.fail('should throw error');
      } catch (err) {
        expect(err).toEqual(errors.jobNotFound(id));
      }
    });

    it('if job completed, throw error', async () => {
      const id = 1;
      const job = new JobEntity();
      job.status = JobStatus.COMPLETED;

      entityManagerStub.findOne.resolves(job);

      // Job status: completed
      try {
        await jobService.startJob(id);
        assert.fail('should throw error');
      } catch (err) {
        expect(err).toEqual(errors.jobCompleted(id, job.status));
      }

      // Job status: error
      job.status = JobStatus.FAILED;
      try {
        await jobService.startJob(id);
        assert.fail('should throw error');
      } catch (err) {
        expect(err).toEqual(errors.jobCompleted(id, job.status));
      }
    });

    it('start job with incorrect type should update job with error', async () => {
      const id = 1;
      const type = 'incorrect';
      const job = new JobEntity();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      job.type = type;

      entityManagerStub.findOne.resolves(job);
      try {
        await jobService.startJob(id);
        assert.fail('should throw error');
      } catch (err) {
        expect(err).toEqual(errors.incorrectType(job.type));
        expect(entityManagerStub.save.args[0][0]['status']).toEqual(
          JobStatus.FAILED,
        );
        expect(entityManagerStub.save.args[0][0]['error']).toEqual(err.message);
      }
    });
  });
});
