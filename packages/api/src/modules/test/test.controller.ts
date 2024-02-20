import { Controller, Get, Inject } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(
    @Inject(TestService)
    private readonly testService: TestService,
  ) {}

  @Get()
  test() {
    return this.testService.testFunction();
  }
}
