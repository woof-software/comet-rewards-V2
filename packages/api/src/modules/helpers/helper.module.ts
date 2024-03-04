import { Module } from '@nestjs/common';
import { AccruedHelper } from './accrued/accrued.helper';
import { CalculationModule } from '../calculations';

@Module({
  imports: [CalculationModule],
  providers: [AccruedHelper],
  exports: [AccruedHelper],
})
export class HelperModule {}
