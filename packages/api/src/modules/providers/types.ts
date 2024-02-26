import { JsonRpcProvider, WebSocketProvider } from 'ethers';

export interface IProvidersService {
  getProviderRPC(): Promise<JsonRpcProvider>;
  getProviderWSS(): Promise<WebSocketProvider>;
}
