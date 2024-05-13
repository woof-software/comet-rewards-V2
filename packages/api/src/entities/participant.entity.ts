import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { tables } from '../database/info';
import { CampaignEntity } from './campaign.entity';

@Entity(tables.PARTICIPANTS)
export class ParticipantEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  networkId: number;

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
  proofStart: string[];

  @Column({
    type: 'varchar',
    array: true,
  })
  proofEnd: string[];

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @ManyToOne(() => CampaignEntity, (campaign) => campaign.participants)
  campaign: CampaignEntity;
}
