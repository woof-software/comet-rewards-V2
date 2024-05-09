import { Module } from '@nestjs/common';
import { TokenBucketService } from './tokenBucket.service';
import { AmqpModule } from '../amqp';
import { TokenBucketController } from './tokenBucket.controller';

@Module({
  imports: [AmqpModule],
  controllers: [TokenBucketController],
  providers: [TokenBucketService],
  exports: [TokenBucketService],
})
export class TokenBucketModule {}
