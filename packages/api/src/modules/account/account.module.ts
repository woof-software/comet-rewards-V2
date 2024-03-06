import { Module } from '@nestjs/common';
import { SubgraphModule } from '../subgraph';
import { AccountService } from './account.service';

@Module({
  imports: [SubgraphModule],
  providers: [AccountService],
  exports: [AccountService],
})
export class AccountModule {}
