import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { tables } from '../database/info';

@Entity(tables.TASK_PARSER_ADDRESSES)
export class TaskParserAddresses {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  jobId: number;

  @Column()
  count: number;
}
