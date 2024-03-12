import { Test, TestingModule } from '@nestjs/testing';
import { WinstonModule } from '../winston';
import { MerkleService } from './merkle.service';

describe('merkle.service', () => {
  let moduleRef: TestingModule;

  let merkleService: MerkleService;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [WinstonModule],
      providers: [MerkleService],
    }).compile();

    merkleService = moduleRef.get(MerkleService);
  });

  // const market = '0xc3d688b66703497daa19211eedff47f25384cdc3';

  describe('generate huge tree', () => {
    it('should be ok', async () => {
      const arr = [];
      for (let i = 0; i < 100; i += 1) {
        const address = `0x${'1'.repeat(
          40 - i.toString().length,
        )}${i.toString()}`;
        arr.push([address, '5000000000000000000']);
      }

      const tree = merkleService.generateTree(arr);
      // arr = [];
      const treeJSON = JSON.stringify(tree.dump());

      const bytes = new Blob([treeJSON]).size;
      const mb = bytes / 1024 / 1024;
      console.log(mb);

      const acc = arr[22];
      const proof = merkleService.getProof(acc[0], tree);
      console.log(proof);
    });
  });
});
