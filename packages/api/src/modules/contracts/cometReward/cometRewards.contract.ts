import { Contract as ContractWeb3, Web3 } from 'web3';
import * as cometRewards from './cometRewards.abi.json';

export class CometRewardsContract {
  private readonly instance: ContractWeb3<any>;

  readonly market: string;

  constructor(
    private readonly providerRPC: Web3,
    market: string,
  ) {
    this.market = market;

    this.instance = new this.providerRPC.eth.Contract(cometRewards['default']);
  }

  getInstance() {
    return this.instance;
  }
}
