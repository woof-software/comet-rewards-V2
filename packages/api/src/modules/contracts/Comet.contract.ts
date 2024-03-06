import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Logger } from 'winston';
import { Web3, Contract as ContractWeb3 } from 'web3';
import { WINSTON_LOGGER } from '../winston/keys';
import * as cometABI from './abi/comet.abi.json';
import { ProviderService } from '../providers/providerService';
import { IProvidersService } from '../providers/types';

@Injectable()
export class CometContract implements OnApplicationBootstrap {
  private readonly logger: Logger;

  private providerRPC: Web3;

  constructor(
    @Inject(ProviderService)
    private readonly providersService: IProvidersService,
    @Inject(WINSTON_LOGGER)
    mainLogger: Logger,
  ) {
    this.logger = mainLogger.child({ scope: 'comet.contract' });
  }

  getInstanceFor(market: string): ContractWeb3<any> {
    return new this.providerRPC.eth.Contract(Object.values(cometABI), market);
  }

  async onApplicationBootstrap() {
    this.providerRPC = await this.providersService.getProviderRPC();
  }

  async getUserBasic(
    market: string,
    address: string,
    blockNumber: number,
  ): Promise<any> {
    const instance = this.getInstanceFor(market);
    return instance.methods.userBasic(address).call({}, blockNumber);
  }

  async trackingIndexScale(market: string, blockNumber: number): Promise<any> {
    const instance = this.getInstanceFor(market);
    return instance.methods.trackingIndexScale().call({}, blockNumber);
  }

  async getUtilization(market: string, blockNumber: string): Promise<any> {
    const instance = this.getInstanceFor(market);
    return instance.methods.getUtilization().call({}, blockNumber);
  }

  async getSupplyRate(
    market: string,
    blockNumber: string,
    utilization: string,
  ): Promise<any> {
    const instance = this.getInstanceFor(market);
    return instance.methods.getSupplyRate(utilization).call({}, blockNumber);
  }

  async getBorrowRate(
    market: string,
    blockNumber: string,
    utilization: string,
  ): Promise<any> {
    const instance = this.getInstanceFor(market);
    return instance.methods.getBorrowRate(utilization).call({}, blockNumber);
  }

  async getBaseTrackingBorrowSpeed(
    market: string,
    blockNumber: string,
  ): Promise<any> {
    const instance = this.getInstanceFor(market);
    return instance.methods.baseTrackingBorrowSpeed().call({}, blockNumber);
  }

  async getBaseTrackingSupplySpeed(
    market: string,
    blockNumber: string,
  ): Promise<any> {
    const instance = this.getInstanceFor(market);
    return instance.methods.baseTrackingSupplySpeed().call({}, blockNumber);
  }

  async getBaseMinForRewards(
    market: string,
    blockNumber: string,
  ): Promise<any> {
    const instance = this.getInstanceFor(market);
    return instance.methods.baseMinForRewards().call({}, blockNumber);
  }
}
