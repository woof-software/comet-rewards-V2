import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { tables } from '../database/info';

@Entity(tables.STAGE_ACCOUNT_ACCRUED)
export class StageAccountAccruedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  jobId: number;

  @Column()
  merkleRequested: boolean;
}
