import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { tables } from '../database/info';
import { ParticipantEntity } from './participant.entity';

@Entity(tables.CAMPAIGNS)
export class CampaignEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  networkId: number;

  @Column()
  market: string;

  @Column()
  blockStart: number;

  @Column()
  blockEnd: number;

  @Column()
  treeRootStart: string;

  @Column()
  treeRootEnd: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @OneToMany(() => ParticipantEntity, (participant) => participant.campaign)
  participants: ParticipantEntity[];
}
