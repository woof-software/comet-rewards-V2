import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { tables } from '../database/info';
import { Participant } from './participant.entity';

@Entity(tables.CAMPAIGNS)
export class Campaign {
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

  @OneToMany(() => Participant, (participant) => participant.campaign)
  participants: Participant[];
}
