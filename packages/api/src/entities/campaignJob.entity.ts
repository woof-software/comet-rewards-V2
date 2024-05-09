import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { tables } from '../database/info';

@Entity(tables.CAMPAIGN_JOBS)
export class CampaignJob {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  campaignId: number;

  @Column()
  jobId: number;
}
