import * as fs from 'node:fs';

export async function createDirIfNotExists(path: string) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err1) => {
      if (err1 && err1.code === 'ENOENT') {
        // Directory doesn't exist, create it
        fs.mkdir(path, (err2) => {
          if (err2) {
            return reject(err2);
          }
          return resolve(true);
        });
        return true;
      }
      if (err1) {
        // Some other error occurred
        return reject(err1);
      }
      return resolve(true);
    });
  });
}
