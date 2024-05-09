import '../../utils/test-helper.test';
import { Test, TestingModule } from '@nestjs/testing';
import { mainLogger, WinstonModule } from '../winston';

import { Amqp } from './amqp';
import { AmqpService } from './amqp.service';

describe('amqp', () => {
  describe('constructor', () => {
    it('if connection rejected should be ok', async () => {
      const mockedConnect = jest.fn(() => {
        throw new Error('err');
      });
      jest.mock('amqplib', () => {
        const originalModule = jest.requireActual('amqplib');

        return {
          __esModule: true,
          ...originalModule,
          connect: mockedConnect,
        };
      });

      const amqpService = new Amqp(mainLogger);

      const channel = await amqpService.getChannel();
      console.log(channel);
    });
  });
});

describe('amqp.service', () => {
  let moduleRef: TestingModule;
  let amqpService: AmqpService;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [WinstonModule],
      providers: [AmqpService],
    }).compile();

    amqpService = moduleRef.get(AmqpService);
  });

  describe('constructor', () => {
    it('if connection rejected should be ok', async () => {
      const chanel = await amqpService.getChannel();
      console.log(chanel);
    });
  });
});
