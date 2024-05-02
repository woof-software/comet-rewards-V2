import { Web3, Contract as ContractWeb3 } from 'web3';
import * as cometABI from './comet.abi.json';

export class CometContract {
  private readonly instance: ContractWeb3<any>;

  constructor(
    private readonly providerRPC: Web3,
    readonly market: string,
  ) {
    this.instance = new this.providerRPC.eth.Contract(
      Object.values(cometABI),
      this.market,
    );
  }

  getInstance() {
    return this.instance;
  }

  async getUserBasic(address: string, blockNumber: number): Promise<any> {
    return this.instance.methods.userBasic(address).call({}, blockNumber);
  }

  async trackingIndexScale(blockNumber: number): Promise<any> {
    return this.instance.methods.trackingIndexScale().call({}, blockNumber);
  }

  async getUtilization(blockNumber: string): Promise<any> {
    return this.instance.methods.getUtilization().call({}, blockNumber);
  }

  async getSupplyRate(blockNumber: string, utilization: string): Promise<any> {
    return this.instance.methods
      .getSupplyRate(utilization)
      .call({}, blockNumber);
  }

  async getBorrowRate(blockNumber: string, utilization: string): Promise<any> {
    return this.instance.methods
      .getBorrowRate(utilization)
      .call({}, blockNumber);
  }

  async getBaseTrackingBorrowSpeed(blockNumber: string): Promise<any> {
    return this.instance.methods
      .baseTrackingBorrowSpeed()
      .call({}, blockNumber);
  }

  async getBaseTrackingSupplySpeed(blockNumber: string): Promise<any> {
    return this.instance.methods
      .baseTrackingSupplySpeed()
      .call({}, blockNumber);
  }

  async getBaseMinForRewards(blockNumber: string): Promise<any> {
    return this.instance.methods.baseMinForRewards().call({}, blockNumber);
  }
}
