import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { SubgraphTaskTypes } from '../modules/job/tasks/subgraph/types';
import { tables } from '../database/info';

@Entity(tables.TASK_SUBGRAPH)
export class TaskSubgraphEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  jobId: number;

  @Column({
    type: 'varchar',
  })
  type: SubgraphTaskTypes; // task type

  @Column()
  skip: number; // records pagination

  @Column()
  count: number; // records count

  @Column()
  finished: boolean; // is all pages processed?

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
