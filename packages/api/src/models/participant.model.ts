import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { tables } from '../database/info';
import { CampaignModel } from './campaign.model';

@Entity(tables.PARTICIPANTS)
export class ParticipantModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  campaignId: number;

  @Column()
  address: string;

  @Column()
  accruedStart: string;

  @Column()
  accruedEnd: string;

  @Column({
    type: 'varchar',
    array: true,
  })
  proof: string[];

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @ManyToOne(() => CampaignModel, (campaign) => campaign.participants)
  campaign: CampaignModel;
}
