import { Controller, Inject, Post } from '@nestjs/common';
import { TokenBucketService } from './tokenBucket.service';

@Controller('tokenBucket')
export class TokenBucketController {
  constructor(
    @Inject(TokenBucketService)
    private readonly tokenBucket: TokenBucketService,
  ) {}

  @Post('/supply')
  async supply() {
    this.tokenBucket.supplyTokens();
  }
}
