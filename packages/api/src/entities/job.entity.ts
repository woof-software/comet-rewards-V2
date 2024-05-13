import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { JobStatus, JobType } from '../modules/job';
import { tables } from '../database/info';

@Entity(tables.JOBS)
export class JobEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
  })
  type: JobType;

  @Column({ type: 'varchar' })
  status: JobStatus;

  @Column({ type: 'json' })
  args: any;

  @Column()
  error: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
