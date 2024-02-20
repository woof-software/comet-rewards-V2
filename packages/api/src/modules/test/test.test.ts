import '../../utils/test-helper';
import { Test, TestingModule } from '@nestjs/testing';
import { TestService } from './test.service';
import { TestModule } from './test.module';
import { WinstonModule } from '../winston';

describe('test.service', () => {
  let moduleRef: TestingModule;
  let testService: TestService;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [WinstonModule, TestModule],
    }).compile();

    testService = moduleRef.get<TestService>(TestService);
  });

  describe('testFunction()', () => {
    it('should be ok', () => {
      expect(testService.testFunction()).toBe(123);
    });
  });
});
