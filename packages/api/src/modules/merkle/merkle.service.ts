import { Inject, Injectable } from '@nestjs/common';
import { Logger } from 'winston';
import { StandardMerkleTree } from '@openzeppelin/merkle-tree';
import { WINSTON_LOGGER } from '../winston/keys';

@Injectable()
export class MerkleService {
  private readonly logger: Logger;

  constructor(
    @Inject(WINSTON_LOGGER)
    mainLogger: Logger,
  ) {
    this.logger = mainLogger.child({ scope: 'merkle.service' });
  }

  generateTree(accountsPrepared: [string, string][]) {
    try {
      return StandardMerkleTree.of(accountsPrepared, ['address', 'uint256']);
    } catch (err) {
      this.logger.error(err.message, { function: 'generateTree' });
      throw err;
    }
  }

  getProof(address, tree) {
    // eslint-disable-next-line no-restricted-syntax
    for (const [i, v] of tree.entries()) {
      if (v[0] === address) {
        // (3)
        const proof = tree.getProof(i);
        return { proof, v };
      }
    }
    return undefined;
  }
}
