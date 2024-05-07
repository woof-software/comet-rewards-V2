import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TaskSubgraph } from '../../../entities';
import { TaskService } from './task.service';
import { AmqpModule } from '../../amqp';
import { ProvidersModule } from '../../providers';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskSubgraph]),
    AmqpModule,
    ProvidersModule,
  ],
  providers: [TaskService],
  exports: [TaskService],
})
export class TaskModule {}
