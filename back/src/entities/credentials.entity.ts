import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Credentials {
  @Column()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  
}

