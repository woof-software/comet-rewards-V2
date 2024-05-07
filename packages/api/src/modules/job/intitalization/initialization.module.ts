import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InitializationService } from './initialization.service';
import { TaskModule } from '../tasks';
import { Job } from '../../../entities/job.entity';
import { JobModule } from '../job.module';
import { ProcessModule } from '../../process/process.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Job]),
    TaskModule,
    JobModule,
    ProcessModule,
  ],
  providers: [InitializationService],
  exports: [InitializationService],
})
export class InitializationModule {}
