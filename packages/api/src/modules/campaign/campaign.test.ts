import '../../utils/test-helper.test';
import { assert, createStubInstance } from 'sinon';
import { CampaignService } from './campaign.service';
import { JobService, JobType } from '../job';
import { AccountService } from '../account';
import { ProviderService } from '../providers/providerService';
import { ContractService } from '../contracts/contract.service';
import { AccruedHelper } from '../helpers/accrued/accrued.helper';
import { MerkleService } from '../merkle/merkle.service';
import { getDataSourceStubs } from '../../utils/stubs.test';
import { mainLogger } from '../winston';
import { Job } from '../../entities/job.entity';

describe('campaign.service', () => {
  let campaignService: CampaignService;

  const { dataSourceStub } = getDataSourceStubs();

  const accountServiceStub = createStubInstance(AccountService);
  const providerServiceStub = createStubInstance(ProviderService);
  const contractServiceStub = createStubInstance(ContractService);
  const accruedHelperStub = createStubInstance(AccruedHelper);
  const merkleServiceStub = createStubInstance(MerkleService);
  const jobServiceStub = createStubInstance(JobService);

  beforeAll(async () => {
    campaignService = new CampaignService(
      accountServiceStub,
      providerServiceStub,
      contractServiceStub,
      accruedHelperStub,
      merkleServiceStub,
      jobServiceStub,
      dataSourceStub,
      mainLogger,
    );
  });

  describe('startCampaign', () => {
    it('should register and start the job', async () => {
      const networkId = 1;
      const campaignId = 1;
      const market = 'market';
      const blockStart = 10;

      providerServiceStub.getBlockNumber.returns(Promise.resolve(blockStart));

      const job = new Job();
      job.id = 11;
      jobServiceStub.registerJob.returns(Promise.resolve(job));

      const res = await campaignService.startCampaign(
        networkId,
        campaignId,
        market,
      );
      expect(res.id).toEqual(job.id);
      assert.calledOnceWithExactly(
        jobServiceStub.registerJob,
        JobType.CAMPAIGN_START,
        { networkId, campaignId, market, blockStart },
      );
      assert.calledOnceWithExactly(jobServiceStub.startJob, job.id);
    });
  });
});
