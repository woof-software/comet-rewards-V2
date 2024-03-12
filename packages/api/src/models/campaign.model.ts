import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { tables } from '../database/info';
import { ParticipantModel } from './participant.model';

@Entity(tables.CAMPAIGNS)
export class CampaignModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  market: string;

  @Column()
  blockStart: number;

  @Column()
  blockEnd: number;

  @Column()
  treeRoot: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @OneToMany(() => ParticipantModel, (participant) => participant.campaign)
  participants: ParticipantModel[];
}
