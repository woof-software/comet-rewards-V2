import { Inject, Injectable } from '@nestjs/common';
import { Logger } from 'winston';
import { DataSource } from 'typeorm';

import { AmqpService } from '../../amqp';
import { Handler } from '../types';
import { WINSTON_LOGGER } from '../../winston/keys';
import { ChainDataTask } from './chainData/chainData.task';
import { ProviderService } from '../../providers/providerService';
import { exchanges, queues } from '../../amqp/constants';
import { TokenBucketService } from '../../tokenBucket/tokenBucket.service';
import { ParserAddressesTask } from './parserAddresses/parserAddresses.task';
import { MerkleTask } from './merkle/merkle.task';
import { MerkleService } from '../../merkle/merkle.service';
import { config } from '../../../utils/config';

const chainDataConfig = config.getTyped('chainData');

@Injectable()
export class TaskService {
  private readonly logger: Logger;

  readonly queues: string[] = [];

  readonly exchanges: string[] = [];

  private readonly taskHandlers: Handler[] = [];

  constructor(
    @Inject(AmqpService)
    private readonly amqpService: AmqpService,
    @Inject(ProviderService) private readonly providerService: ProviderService,
    @Inject(TokenBucketService)
    private readonly tokenBucket: TokenBucketService,
    @Inject(MerkleService) private readonly merkleService: MerkleService,
    @Inject(DataSource)
    private readonly dataSource: DataSource,
    @Inject(WINSTON_LOGGER)
    mainLogger: Logger,
  ) {
    this.logger = mainLogger.child({ scope: 'task.service' });
  }

  /**
   * @desc Assert task queues
   * */
  async registerTaskQueues(): Promise<void> {
    const channel = await this.amqpService.getChannel();

    // eslint-disable-next-line no-restricted-syntax
    for (const taskQueue of Object.values(queues.task)) {
      const { queue } = await channel.assertQueue(taskQueue, {
        durable: true,
      });
      this.queues.push(queue);
    }
  }

  /**
   * @desc Register result exchanges in which task handlers will put their results
   * */
  async registerResultExchanges(): Promise<void> {
    const channel = await this.amqpService.getChannel();

    // eslint-disable-next-line no-restricted-syntax
    for (const resultExchange of Object.values(exchanges.result)) {
      const { exchange } = await channel.assertExchange(
        resultExchange,
        'headers',
        {
          durable: true,
        },
      );
      this.exchanges.push(exchange);
    }
  }

  async registerTaskHandlers() {
    const channel = await this.amqpService.getChannel();

    const parserAddressesTask = new ParserAddressesTask(
      channel,
      this.dataSource,
    );
    this.taskHandlers.push(parserAddressesTask);
    await parserAddressesTask.registerHandler();

    // Chain data task require separate channel to prevent token bucket consumers overflow
    const chainDataChannel = await this.amqpService.createChannel();
    await chainDataChannel.prefetch(chainDataConfig.rps * 2, true);
    const chainDataTaskHandler = new ChainDataTask(
      chainDataChannel,
      this.providerService,
      this.tokenBucket,
      this.logger,
    );
    this.taskHandlers.push(chainDataTaskHandler);
    await chainDataTaskHandler.registerHandler();

    const merkleTask = new MerkleTask(
      channel,
      this.merkleService,
      this.dataSource,
    );
    this.taskHandlers.push(merkleTask);
    await merkleTask.registerHandler();
  }
}
