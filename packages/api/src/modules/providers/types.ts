import { Web3 } from 'web3';

export interface IProvidersService {
  getProviderRPC(networkId: number): Promise<Web3>;
}
