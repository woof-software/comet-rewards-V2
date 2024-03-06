import { Inject, Injectable } from '@nestjs/common';
import { ChildProcess } from 'child_process';
import { Logger } from 'winston';
import { fork } from 'node:child_process';
import { WINSTON_LOGGER } from '../winston/keys';
import { ProcessId, srcPath } from './process.mapping';

@Injectable()
export class ProcessService {
  private readonly logger: Logger;

  private readonly processCounter: {
    [key in ProcessId]?: number;
  } = {};

  private readonly processes: {
    [key: string]: ChildProcess;
  } = {};

  constructor(
    @Inject(WINSTON_LOGGER)
    mainLogger: Logger,
  ) {
    this.logger = mainLogger.child({ spawn: 'process.service' });
  }

  spawnProcess(id: ProcessId): string {
    try {
      const processTag = id + this.getProcessIncrement(id);
      const childProcess = fork(this.getModulePath(id), [processTag], {
        execArgv: ['--inspect=4554', '--inspect-brk'],
      });
      this.logger.info(
        `forked child process ${processTag}|${childProcess.pid}`,
      );

      this.processes[processTag] = childProcess;

      this.registerDefaultHandlers(processTag, childProcess);

      return processTag;
    } catch (err) {
      this.logger.error(err.message, {
        function: 'spawnProcess',
        args: { id },
      });
      throw err;
    }
  }

  getModulePath(id: ProcessId): string {
    try {
      const path = `./${this.getSourcePath()}${id}.process${this.getModuleExt()}`;
      // require.resolve(path)
      return path;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  getProcess(processTag: string) {
    return this.processes[processTag];
  }

  sendMessage(processTag: string, msg: any) {
    const childProcess = this.getProcess(processTag);

    if (!childProcess) {
      throw new Error(`process ${processTag} not found`);
    }

    childProcess.send(msg, (err) => {
      if (err) {
        this.logger.error(err.message, {
          function: 'sendMessage',
          args: { processTag, pid: childProcess.pid },
        });
      }
    });
  }

  sendDisconnect(processTag: string) {
    const childProcess = this.getProcess(processTag);

    if (!childProcess) {
      throw new Error(`process ${processTag} not found`);
    }

    childProcess.disconnect();
  }

  registerHandler(
    processTag: string,
    event: string,
    listener: (...args: any[]) => void,
  ) {
    const childProcess = this.getProcess(processTag);

    if (!childProcess) {
      throw new Error(`process ${processTag} not found`);
    }

    childProcess.on(event, listener);
    this.logger.info(`created '${event}' handler for ${processTag}`);
  }

  private registerDefaultHandlers(
    processTag: string,
    childProcess: ChildProcess,
  ) {
    childProcess.on('exit', (code, signal) => {
      this.logger.info(
        `${processTag}|${childProcess.pid} exited with code ${code} ${signal}`,
      );
      delete this.processes[processTag];
    });
    childProcess.on('error', (err) => {
      this.logger.error(`${processTag}|${childProcess.pid}: ${err.message}`);
    });
  }

  private getProcessIncrement(id: ProcessId): number {
    Number.isInteger(this.processCounter[id])
      ? (this.processCounter[id] += 1)
      : (this.processCounter[id] = 1);
    return this.processCounter[id];
  }

  private getSourcePath(): string {
    switch (process.env.NODE_ENV) {
      case 'test':
      case undefined: {
        return `src/${srcPath}/`;
      }
      default: {
        return `dist/${srcPath}/`;
      }
    }
  }

  private getModuleExt(): string {
    switch (process.env.NODE_ENV) {
      case 'test':
      case undefined: {
        return '.ts';
      }
      default: {
        return '.js';
      }
    }
  }
}
