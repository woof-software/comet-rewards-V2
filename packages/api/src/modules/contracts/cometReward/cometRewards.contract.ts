import { Contract as ContractWeb3, Web3 } from 'web3';
import config from 'config';
import * as cometRewards from './cometRewards.abi.json';

const networksConfig = config.getTyped('networks');

export class CometRewardsContract {
  private readonly instance: ContractWeb3<any>;

  readonly market: string;

  constructor(
    private readonly providerRPC: Web3,
    networkId: number,
    market: string,
  ) {
    this.market = market;

    const address = networksConfig[networkId].contracts.cometRewards;
    this.instance = new this.providerRPC.eth.Contract(
      cometRewards['default'],
      address,
    );
  }

  getInstance() {
    return this.instance;
  }
}
