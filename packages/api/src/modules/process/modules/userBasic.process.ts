import { Account } from '../../account/account.types';
import * as cometABI from '../../contracts/abi/comet.abi.json';
import { UserBasic } from '../../contracts/contract.types';

const { Web3 } = require('web3');

const processTag = process.argv[2];

const web3 = new Web3(process.env.RPC_URL_1);

console.log(`process ${processTag}|${process.pid} started`);

const proceedData = async (
  accounts: Account[],
  market: string,
  blockNumber: number,
) => {
  const contract = new web3.eth.Contract(Object.values(cometABI), market);

  const accounts_ = [];
  for (let i = 0; i < accounts.length; i += 1) {
    await contract.methods
      .userBasic(accounts[i].id)
      .call({}, blockNumber)
      .then((userBasic: UserBasic) => {
        accounts_.push({
          id: accounts[i].id,
          principal: userBasic.principal.toString(),
          baseTrackingIndex: userBasic.baseTrackingIndex.toString(),
          baseTrackingAccrued: userBasic.baseTrackingAccrued.toString(),
          assetsIn: userBasic.assetsIn.toString(),
          _reserved: userBasic._reserved.toString(),
        });
      })
      .catch(async (err) => {
        // Handle backoff timeout if request rate exceeded
        if (err.code === 100) {
          const timeout = (err?.data?.rate?.backoff_seconds || 30) * 1000;
          console.log(
            `${processTag}|${process.pid} backoff for ${timeout / 1000}s`,
          );
          await new Promise((resolve) => {
            setTimeout(resolve, timeout);
          });
        } else {
          throw err;
        }
      });
    await new Promise((resolve) => {
      setTimeout(resolve, 600);
    });
  }
  return accounts_;
};

process.on('message', async (msg: any) => {
  console.log(
    `${processTag}|${process.pid}: processing ${msg.accounts.length} accounts for market ${msg.market}`,
  );
  const result = await proceedData(msg.accounts, msg.market, msg.blockNumber);
  console.log(`${processTag}|${process.pid}: processing completed`);
  process.send(result);
});

process.on('disconnect', () => {
  console.log(`${processTag}|${process.pid}: shutting down`);
});
