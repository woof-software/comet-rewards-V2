import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { JobStatus, JobType } from '../modules/job/constants';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  key?: string;

  @Column({
    type: 'varchar',
  })
  type: JobType;

  @Column({ type: 'varchar' })
  status: JobStatus;

  @Column({ type: 'json' })
  args: any;
}
