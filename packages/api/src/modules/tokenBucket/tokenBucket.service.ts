import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Logger } from 'winston';
import { Channel } from 'amqplib';

import { mainLogger } from '../winston';
import { AmqpService } from '../amqp';
import { queues } from '../amqp/constants';
import { config } from '../../utils/config';

const chainDataConfig = config.getTyped('chainData');

@Injectable()
export class TokenBucketService implements OnApplicationBootstrap {
  private readonly logger: Logger;

  private channel: Channel;

  constructor(@Inject(AmqpService) private readonly amqpService: AmqpService) {
    this.logger = mainLogger.child({ scope: 'tokenBucket.service' });
  }

  async onApplicationBootstrap() {
    this.channel = await this.amqpService.createChannel();
    await this.channel.assertQueue(queues.TOKEN_BUCKET, {
      durable: false,
      maxLength: chainDataConfig.rps,
      arguments: { 'x-overflow': 'reject-publish' },
    });

    setInterval(() => {
      this.supplyTokens();
    }, 1000);
  }

  supplyTokens() {
    for (let i = 0; i < chainDataConfig.rps; i++) {
      this.channel.sendToQueue(queues.TOKEN_BUCKET, Buffer.from(''));
    }
  }

  async consumeToken() {
    return new Promise((resolve) => {
      this.channel.consume(
        queues.TOKEN_BUCKET,
        async (msg) => {
          await this.channel.cancel(msg.fields.consumerTag);
          resolve(true);
        },
        { noAck: true },
      );
    });
  }
}
