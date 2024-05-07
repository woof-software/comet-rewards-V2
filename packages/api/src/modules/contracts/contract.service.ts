import { Inject, Injectable } from '@nestjs/common';
import { ProviderService } from '../providers/providerService';
import { CometContract } from './comet/Comet.contract';
import { CometRewardsContract } from './cometReward/cometRewards.contract';

@Injectable()
export class ContractService {
  constructor(
    @Inject(ProviderService)
    private readonly providerService: ProviderService,
  ) {}

  async getCometContract(
    networkId: number,
    market: string,
  ): Promise<CometContract> {
    const providerRPC = await this.providerService.getProviderRPC(networkId);
    return new CometContract(providerRPC, market);
  }

  async getCometRewardsContract(
    networkId: number,
    market: string,
  ): Promise<CometRewardsContract> {
    const providerRPC = await this.providerService.getProviderRPC(networkId);
    return new CometRewardsContract(providerRPC, market);
  }
}
