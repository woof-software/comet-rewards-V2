import { Module } from '@nestjs/common';
import { ProcessService } from './process.service';

@Module({
  imports: [],
  providers: [ProcessService],
  exports: [ProcessService],
})
export class ProcessModule {}
