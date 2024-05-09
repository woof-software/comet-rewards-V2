import { Inject, Injectable } from '@nestjs/common';
import { Logger } from 'winston';
import { Channel, connect, Connection } from 'amqplib';
import { WINSTON_LOGGER } from '../winston/keys';

@Injectable()
export class AmqpService {
  private readonly logger: Logger;

  private readonly connection: Promise<Connection>;

  private readonly channel: Promise<Channel>;

  constructor(
    @Inject(WINSTON_LOGGER)
    mainLogger: Logger,
  ) {
    this.logger = mainLogger.child({ scope: 'amqp' });

    this.connection = connect(process.env.RABBIT_URL);
    this.channel = this.connection
      .then((conn: Connection) => {
        this.logger.info('AMQP connection created');
        return conn
          .createChannel()
          .then((channel) => {
            this.logger.info('AMQP channel created');
            return channel;
          })
          .catch((err) => {
            this.logger.error(`AMQP channel creation error: ${err.message}`);
            throw err;
          });
      })
      .catch((err) => {
        this.logger.error(`AMQP connection error: ${err.message}`);
        throw err;
      });
  }

  async getConnection() {
    return this.connection;
  }

  async getChannel() {
    return this.channel;
  }

  async createChannel() {
    const connection = await this.getConnection();
    return connection.createChannel();
  }
}
