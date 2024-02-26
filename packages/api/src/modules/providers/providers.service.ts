import { Inject } from '@nestjs/common';
import { Logger } from 'winston';
import { ethers, JsonRpcProvider, WebSocketProvider } from 'ethers';
import * as process from 'process';
import { WINSTON_LOGGER } from '../winston/keys';
import { IProvidersService } from './types';

export class ProvidersService implements IProvidersService {
  private readonly logger: Logger;

  private providerRPC: JsonRpcProvider;

  private providerWSS: WebSocketProvider;

  constructor(
    @Inject(WINSTON_LOGGER)
    mainLogger: Logger,
  ) {
    this.logger = mainLogger.child('provides.service');
  }

  async getProviderRPC(): Promise<JsonRpcProvider> {
    if (!this.providerRPC) {
      const providerRPC = new ethers.JsonRpcProvider(process.env.RPC_URL_1);

      try {
        const network = await providerRPC.getNetwork();
        this.logger.info(
          `Established new RPC connection with network: ${network.name} ${network.chainId}`,
        );

        this.providerRPC = providerRPC;
      } catch (err) {
        this.logger.error(err.message);
        throw err;
      }
    }

    return this.providerRPC;
  }

  async getProviderWSS(): Promise<WebSocketProvider> {
    if (!this.providerWSS) {
      const providerWSS = new ethers.WebSocketProvider(process.env.WSS_URL_1);

      try {
        const network = await providerWSS.getNetwork();
        this.logger.info(
          `Established new WebSocket connection with network: ${network.name} ${network.chainId}`,
        );

        this.providerWSS = providerWSS;
      } catch (err) {
        this.logger.error(err.message);
        throw err;
      }
    }

    return this.providerWSS;
  }
}
