import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Logger } from 'winston';
import { Channel } from 'amqplib';
import { mainLogger } from '../winston';
import { AmqpService } from '../amqp';
import { queues } from '../amqp/constants';

const rps = 5;

@Injectable()
export class TokenBucketService implements OnApplicationBootstrap {
  private readonly logger: Logger;

  private channel: Channel;

  constructor(@Inject(AmqpService) private readonly amqpService: AmqpService) {
    this.logger = mainLogger.child({ scope: 'tokenBucket.service' });
  }

  async onApplicationBootstrap() {
    this.channel = await this.amqpService.createChannel();
    await this.channel.prefetch(1);
    await this.channel.assertQueue(queues.TOKEN_BUCKET, {
      arguments: { 'x-max-length': rps },
      durable: false,
    });

    setInterval(() => {
      console.log('supply');
      this.supplyTokens();
    }, 2000);
  }

  supplyTokens() {
    for (let i = 0; i < 1; i++) {
      try {
        this.channel.sendToQueue(queues.TOKEN_BUCKET, Buffer.from(''), {
          messageId: i.toString(),
        });
      } catch (err) {
        console.log(err);
      }
    }
  }

  async consumeToken() {
    return new Promise((resolve) => {
      this.channel.consume(
        queues.TOKEN_BUCKET,
        async (msg) => {
          await this.channel.cancel(msg.fields.consumerTag);
          const id = msg.properties.messageId;
          this.channel.ack(msg);
          resolve(id);
        },
        { noAck: false },
      );
    });
  }
}
