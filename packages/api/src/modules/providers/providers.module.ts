import { Module } from '@nestjs/common';
import { ProviderService } from './providerService';

@Module({
  providers: [ProviderService],
  exports: [ProviderService],
})
export class ProvidersModule {}
