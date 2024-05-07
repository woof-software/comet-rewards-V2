import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TaskSubgraph } from '../../../entities';
import { TaskService } from './task.service';
import { AmqpModule } from '../../amqp';

@Module({
  imports: [TypeOrmModule.forFeature([TaskSubgraph]), AmqpModule],
  providers: [TaskService],
  exports: [TaskService],
})
export class TaskModule {}
