import { Inject, Injectable } from '@nestjs/common';
import { ProviderService } from '../providers/providerService';
import { Contracts } from './contract.types';
import { CometContract } from './comet/Comet.contract';

@Injectable()
export class ContractService {
  constructor(
    @Inject(ProviderService)
    private readonly providerService: ProviderService,
  ) {}

  async getInstance(
    contract: Contracts,
    networkId: number,
    market: string,
  ): Promise<CometContract> {
    const providerRPC = await this.providerService.getProviderRPC(networkId);

    switch (contract) {
      case Contracts.COMET: {
        return new CometContract(providerRPC, market);
      }
      default: {
        throw new Error(`Contract wrapper not defined for ${contract}`);
      }
    }
  }
}
