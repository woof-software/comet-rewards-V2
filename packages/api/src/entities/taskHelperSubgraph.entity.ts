import { Column, PrimaryColumn } from 'typeorm';
import { SubgraphTaskTypes } from '../modules/job/tasks/subgraph/types';

export class TaskHelperSubgraph {
  @PrimaryColumn()
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
}
