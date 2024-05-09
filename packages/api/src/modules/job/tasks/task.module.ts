import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Participant, TaskSubgraph } from '../../../entities';
import { TaskService } from './task.service';
import { AmqpModule } from '../../amqp';
import { ProvidersModule } from '../../providers';
import { TokenBucketModule } from '../../tokenBucket/tokenBucket.module';
import { ParserAddress } from '../../../entities/parserAddress.entity';
import { TaskParserAddresses } from '../../../entities/taskParserAddresses.entity';
import { MerkleModule } from '../../merkle';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ParserAddress,
      Participant,
      TaskParserAddresses,
      TaskSubgraph,
    ]),
    TokenBucketModule,
    AmqpModule,
    ProvidersModule,
    MerkleModule,
  ],
  providers: [TaskService],
  exports: [TaskService],
})
export class TaskModule {}
