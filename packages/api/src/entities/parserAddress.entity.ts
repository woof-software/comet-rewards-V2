import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { tables } from '../database/info';

@Entity(tables.PARSER_ADDRESSES)
export class ParserAddressEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  networkId: number;

  @Column()
  contractAddress: string;

  @Column()
  address: string;

  @Column()
  fromBlock: number; // first block when the address appeared

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  convertUsernameToLowercase() {
    this.address = this.address.toLowerCase();
  }
}
