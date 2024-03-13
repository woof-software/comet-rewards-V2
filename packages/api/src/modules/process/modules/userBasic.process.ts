import { Contract, ContractAbi } from 'web3';
import { Account } from '../../account/account.types';
import * as cometABI from '../../contracts/comet/comet.abi.json';
import { config } from '../../../utils/config';

const networks = config.getTyped('networks');

const { Web3 } = require('web3');

const processTag = process.argv[2];

console.log(`process ${processTag}|${process.pid} started`);

const getContractInstance = (
  networkId: number,
  market: string,
): Contract<ContractAbi> => {
  const network = networks[networkId];
  if (!network) {
    throw new Error(`Network ${networkId} not configured`);
  }

  const web3 = new Web3(network.rpcURL);
  return new web3.eth.Contract(Object.values(cometABI), market);
};

const proceedData = async (
  networkId: number,
  market: string,
  accounts: Account[],
  blockNumber: number,
) => {
  const contract = getContractInstance(networkId, market);

  const accounts_ = [];
  for (let i = 0; i < accounts.length; i += 1) {
    await contract.methods
      .userBasic(accounts[i].id)
      .call({}, blockNumber)
      .then((userBasic: any) => {
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
  const result = await proceedData(
    msg.networkId,
    msg.market,
    msg.accounts,
    msg.blockNumber,
  );
  console.log(`${processTag}|${process.pid}: processing completed`);
  process.send(result);
});

process.on('disconnect', () => {
  console.log(`${processTag}|${process.pid}: shutting down`);
});
