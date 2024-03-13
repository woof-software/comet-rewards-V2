import { Module } from '@nestjs/common';
import { ProvidersModule } from '../providers';
import { ContractService } from './contract.service';

@Module({
  imports: [ProvidersModule],
  providers: [ContractService],
  exports: [ContractService],
})
export class ContractsModule {}
