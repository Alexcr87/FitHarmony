import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinColumn } from 'typeorm';
import { Credentials } from './credentials.entity';
import { Genders } from './gender.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @ManyToOne(()=> Genders,{ eager: true })
  gender: Genders;

  @Column('float')
  height: number;

  @Column('float')
  weight: number;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  image: string;

  @Column('simple-array')
  diseases: string[];

  @OneToOne(()=> Credentials)
  @JoinColumn()
  credentials: Credentials
}


