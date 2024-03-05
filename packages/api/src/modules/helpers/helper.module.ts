import { Module } from '@nestjs/common';
import { AccruedHelper } from './accrued/accrued.helper';
import { CalculationModule } from '../calculations';
import { ProcessModule } from '../process/process.module';
import { ContractsModule } from '../contracts/contracts.module';

@Module({
  imports: [CalculationModule, ProcessModule, ContractsModule],
  providers: [AccruedHelper],
  exports: [AccruedHelper],
})
export class HelperModule {}
