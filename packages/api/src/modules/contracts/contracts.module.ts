import { Module } from '@nestjs/common';
import { CometContract } from './Comet.contract';
import { ProvidersModule } from '../providers';

@Module({
  imports: [ProvidersModule],
  providers: [CometContract],
  exports: [CometContract],
})
export class ContractsModule {}
