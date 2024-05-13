import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InitializationService } from './initialization.service';
import { TaskModule } from '../tasks';
import { JobEntity } from '../../../entities/job.entity';
import { JobModule } from '../job.module';

@Module({
  imports: [TypeOrmModule.forFeature([JobEntity]), TaskModule, JobModule],
  providers: [InitializationService],
  exports: [InitializationService],
})
export class InitializationModule {}
