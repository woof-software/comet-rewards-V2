import { ParserAddress } from '../../../../entities/parserAddress.entity';

export interface ParserAddressesTaskMessage {
  networkId: number;
  market: string;
  blockNumber: number;
}

export interface ParserAddressesTaskResult {
  error?: string;
  addresses?: ParserAddress[];
}
