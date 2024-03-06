import { Web3 } from 'web3';

export interface IProvidersService {
  getProviderRPC(): Promise<Web3>;
}
