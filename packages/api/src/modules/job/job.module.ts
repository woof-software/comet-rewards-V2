import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JobService } from './job.service';
import { AmqpModule } from '../amqp';
import { JobEntity } from '../../entities/job.entity';
import { ParticipantEntity } from '../../entities';
import { TaskParserAddressesEntity } from '../../entities/taskParserAddresses.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      JobEntity,
      ParticipantEntity,
      TaskParserAddressesEntity,
    ]),
    AmqpModule,
  ],
  providers: [JobService],
  exports: [JobService],
})
export class JobModule {}
