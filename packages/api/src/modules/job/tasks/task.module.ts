import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ParticipantEntity, TaskSubgraphEntity } from '../../../entities';
import { TaskService } from './task.service';
import { AmqpModule } from '../../amqp';
import { ProvidersModule } from '../../providers';
import { TokenBucketModule } from '../../tokenBucket/tokenBucket.module';
import { ParserAddressEntity } from '../../../entities/parserAddress.entity';
import { TaskParserAddressesEntity } from '../../../entities/taskParserAddresses.entity';
import { MerkleModule } from '../../merkle';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ParserAddressEntity,
      ParticipantEntity,
      TaskParserAddressesEntity,
      TaskSubgraphEntity,
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
