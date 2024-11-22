import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";


@Entity()
export class Genders {
  @Column()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  gender: string;

  @OneToMany(()=> User, user => user.gender)
  users: User[];
}

