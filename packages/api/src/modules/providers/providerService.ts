import { Injectable } from '@nestjs/common';
import { Logger } from 'winston';
import { FMT_BYTES, FMT_NUMBER, Web3 } from 'web3';
import { IProvidersService } from './types';
import { config } from '../../utils/config';
import { mainLogger } from '../winston';

const networks = config.getTyped('networks');

@Injectable()
export class ProviderService implements IProvidersService {
  private readonly logger: Logger;

  private providersRpc: { [id: number]: Web3 } = {};

  constructor() {
    this.logger = mainLogger.child('provides.service');
  }

  async getProviderRPC(networkId: number): Promise<Web3> {
    if (!networks[networkId]) {
      throw new Error(`No config for ${networkId}`);
    }

    if (this.providersRpc[networkId]) return this.providersRpc[networkId];

    const networkConfig = networks[networkId];

    const providerRPC = new Web3(networkConfig.rpcURL);
    try {
      const network = await providerRPC.eth.net.getId();
      this.logger.info(
        `Established new Web3 connection with network: id=${network}`,
      );

      this.providersRpc[networkId] = providerRPC;
      return providerRPC;
    } catch (err) {
      this.logger.error(err.message, { function: 'getProviderRPC' });
      throw err;
    }
  }

  async getBlockNumber(networkId: number): Promise<number> {
    const provider = await this.getProviderRPC(networkId);
    return provider.eth.getBlockNumber({
      number: FMT_NUMBER.NUMBER,
      bytes: FMT_BYTES.HEX,
    });
  }

  async getBlockTimestamp(networkId: number, block: number): Promise<any> {
    const provider = await this.getProviderRPC(networkId);
    const { timestamp } = await provider.eth.getBlock(block, false, {
      number: FMT_NUMBER.NUMBER,
      bytes: FMT_BYTES.HEX,
    });
    return timestamp;
  }
}
