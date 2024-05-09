import BigNumber from 'bignumber.js';

export const MERKLE_DIR = 'merkle-files';

export const accrualDescaleFactor = {
  '0xc3d688b66703497daa19211eedff47f25384cdc3': new BigNumber(1),
  '0xa17581a9e3356d9a858b789d68b4d866e593ae94': new BigNumber(1e12),
};

export const baseScale = {
  '0xc3d688b66703497daa19211eedff47f25384cdc3': new BigNumber(1e6),
  '0xa17581a9e3356d9a858b789d68b4d866e593ae94': new BigNumber(1e18),
};
