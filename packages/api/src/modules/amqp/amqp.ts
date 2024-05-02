import { Logger } from 'winston';
import { connect, Connection, Channel } from 'amqplib';

/**
 * @desc Instance of the class should be shared across single thread
 * */
export class Amqp {
  private readonly logger: Logger;

  private readonly connection: Promise<Connection>;

  private readonly channel: Promise<Channel>;

  constructor(mainLogger: Logger) {
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
}
