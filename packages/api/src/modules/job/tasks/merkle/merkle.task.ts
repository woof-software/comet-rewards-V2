import { Channel } from 'amqplib';
import { DataSource } from 'typeorm';
import * as fs from 'node:fs';
import { Task } from '../task/task';
import { mainLogger } from '../../../winston';
import { MerkleTaskMessage, MerkleTaskResult } from './types';
import { MessageHeaders } from '../../types';
import { exchanges, queues } from '../../../amqp/constants';
import { MerkleService } from '../../../merkle/merkle.service';
import { tables } from '../../../../database/info';
import { MERKLE_DIR } from '../../../../common/constants';
import { createDirIfNotExists } from '../../../../utils/utils';
import { Participant } from '../../../../entities';

export class MerkleTask extends Task {
  constructor(
    channel: Channel,
    private readonly merkleService: MerkleService,
    private readonly dataSource: DataSource,
  ) {
    const logger = mainLogger.child({ scope: 'merkle.task' });
    super(channel, queues.task.MERKLE, exchanges.result.MERKLE, logger);
  }

  async handler(msg) {
    const headers = <MessageHeaders>msg.properties.headers;
    try {
      const data: MerkleTaskMessage = JSON.parse(msg.content.toString());

      const accruedTarget =
        data.type === 'start' ? 'accruedStart' : 'accruedEnd';
      const participants = (
        await this.dataSource.manager.query(
          `
                SELECT *, ROW_NUMBER() OVER () AS index
                FROM (
                         SELECT address, "${accruedTarget}"
                         FROM ${tables.PARTICIPANTS}
                         WHERE "campaignId" = $1 AND "networkId" = $2
                         ORDER BY address
                ) AS filtered_data;
            `,
          [data.campaignId, data.networkId],
        )
      ).map(Object.values);

      const tree = this.merkleService.generateTree(participants);

      await createDirIfNotExists(`./${MERKLE_DIR}`);
      await new Promise((resolve) => {
        fs.writeFile(
          `./${MERKLE_DIR}/campaign_${data.campaignId}_${data.type}.json`,
          JSON.stringify(tree.dump()),
          resolve,
        );
      });

      for (let i = 0; i < participants.length; i++) {
        const proof = tree.getProof(i);
        await this.dataSource.manager.update(
          Participant,
          {
            campaignId: data.campaignId,
            networkId: data.networkId,
            address: participants[i][0],
          },
          {
            [data.type === 'start' ? 'proofStart' : 'proofEnd']: proof,
          },
        );
      }

      const message: MerkleTaskResult = {
        root: tree.root,
      };

      this.channel.publish(
        this.resultExchange,
        '',
        Buffer.from(JSON.stringify(message)),
        { headers },
      );

      this.channel.ack(msg);
    } catch (err) {
      this.logger.error(err.message);
      await this.handleError(headers, err.message);
      this.channel.ack(msg);
    }
  }

  /**
   * @desc Handle error inside task, send error message to result exchange
   * */
  async handleError(headers: MessageHeaders, error: string) {
    const message = {
      error,
    };
    this.channel.publish(
      this.resultExchange,
      '',
      Buffer.from(JSON.stringify(message)),
      { headers },
    );
  }
}
