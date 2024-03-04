import { Module } from '@nestjs/common';
import { ContractsModule } from '../contracts/contracts.module';
import { SubgraphModule } from '../subgraph';
import { CalculationService } from './calculation.service';

@Module({
  imports: [ContractsModule, SubgraphModule],
  providers: [CalculationService],
  exports: [CalculationService],
})
export class CalculationModule {}
