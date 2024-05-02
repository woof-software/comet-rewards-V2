import { Inject, Injectable } from '@nestjs/common';
import { Logger } from 'winston';
import { DataSource } from 'typeorm';

import { AmqpService } from '../../amqp/amqp.service';
import { Handler } from '../types';
import { SubgraphTask } from './subgraph';
import { ResultExchanges, TaskQueues } from '../constants';
import { WINSTON_LOGGER } from '../../winston/keys';
import { SubgraphService } from '../../subgraph/subgraph.service';

@Injectable()
export class TaskService {
  private readonly logger: Logger;

  readonly queues: string[] = [];

  readonly exchanges: string[] = [];

  private readonly taskHandlers: Handler[];

  constructor(
    @Inject(AmqpService)
    private readonly amqpService: AmqpService,
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
    for (const taskQueue of Object.values(TaskQueues)) {
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
    for (const resultExchange of Object.values(ResultExchanges)) {
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
    const subgraphTaskHandler = new SubgraphTask(
      channel,
      this.dataSource,
      new SubgraphService(this.logger),
    );
    await subgraphTaskHandler.registerHandler();
  }
}
