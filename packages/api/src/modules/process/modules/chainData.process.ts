import { mainLogger } from '../../winston/winston.module';
import { ChainDataTask } from '../../job/tasks/chainData/chainData.task';
import { Amqp } from '../../amqp/amqp';
import { ProviderService } from '../../providers/providerService';

const processTag = process.argv[2];

const logger = mainLogger.child({ scope: `${processTag}|${process.pid}` });

logger.info('process started');

const amqpService = new Amqp(mainLogger);
const providerService = new ProviderService();

async function start(): Promise<void> {
  try {
    const channel = await amqpService.getChannel();
    const chainDataTask = new ChainDataTask(channel, providerService);

    await chainDataTask.registerHandler();
    logger.info('chain data task handler registered');
  } catch (err) {
    logger.error(`failed to start task handler: ${err.message}`);
  }
}

start();
