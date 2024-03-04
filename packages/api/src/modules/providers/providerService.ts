import { Inject } from '@nestjs/common';
import { Logger } from 'winston';
import * as process from 'process';
import { FMT_BYTES, FMT_NUMBER, Web3 } from 'web3';
import { WINSTON_LOGGER } from '../winston/keys';
import { IProvidersService } from './types';

export class ProviderService implements IProvidersService {
  private readonly logger: Logger;

  private providerRpc: Web3;

  constructor(
    @Inject(WINSTON_LOGGER)
    mainLogger: Logger,
  ) {
    this.logger = mainLogger.child('provides.service');
  }

  async getProviderRPC(): Promise<Web3> {
    if (this.providerRpc) return this.providerRpc;

    const providerRPC = new Web3(process.env.RPC_URL_1);
    try {
      const network = await providerRPC.eth.net.getId();
      this.logger.info(
        `Established new Web3 connection with network: id=${network}`,
      );

      this.providerRpc = providerRPC;
      return providerRPC;
    } catch (err) {
      this.logger.error(err.message, { function: 'getProviderRPC' });
      throw err;
    }
  }

  async getBlockNumber(): Promise<number> {
    const provider = await this.getProviderRPC();
    return provider.eth.getBlockNumber({
      number: FMT_NUMBER.NUMBER,
      bytes: FMT_BYTES.HEX,
    });
  }

  async getBlockTimestamp(block: number): Promise<any> {
    const provider = await this.getProviderRPC();
    const { timestamp } = await provider.eth.getBlock(block, false, {
      number: FMT_NUMBER.NUMBER,
      bytes: FMT_BYTES.HEX,
    });
    return timestamp;
  }
}
