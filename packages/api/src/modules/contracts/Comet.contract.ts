import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Logger } from 'winston';
import { Contract, ethers, JsonRpcProvider, WebSocketProvider } from 'ethers';
import { WINSTON_LOGGER } from '../winston/keys';
import * as cometABI from './abi/comet.abi.json';
import { ProvidersService } from '../providers/providers.service';
import { IProvidersService } from '../providers/types';

@Injectable()
export class CometContract implements OnApplicationBootstrap {
  private readonly logger: Logger;

  private providerWSS: WebSocketProvider;

  private providerRPC: JsonRpcProvider;

  constructor(
    @Inject(ProvidersService)
    private readonly providersService: IProvidersService,
    @Inject(WINSTON_LOGGER)
    mainLogger: Logger,
  ) {
    this.logger = mainLogger.child({ scope: 'comet.contract' });
  }

  getInstanceFor(market: string): Contract {
    return new ethers.Contract(
      market,
      Object.values(cometABI),
      this.providerRPC,
    );
  }

  async onApplicationBootstrap() {
    this.providerWSS = await this.providersService.getProviderWSS();
    this.providerRPC = await this.providersService.getProviderRPC();
  }

  async getUserBasic(market: string, address: string): Promise<any> {
    const instance = this.getInstanceFor(market);
    return instance.userBasic(address);
  }

  async trackingIndexScale(market: string) {
    const instance = this.getInstanceFor(market);
    return instance.trackingIndexScale();
  }
}
