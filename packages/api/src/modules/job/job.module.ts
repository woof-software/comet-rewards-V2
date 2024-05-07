import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JobService } from './job.service';
import { AmqpModule } from '../amqp';
import { Job } from '../../entities/job.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Job]), AmqpModule],
  providers: [JobService],
  exports: [JobService],
})
export class JobModule {}
