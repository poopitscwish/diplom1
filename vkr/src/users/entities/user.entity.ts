import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id:number
  @Column()
  fio: string
  @Column({ nullable: true, default: "123" })
  password: string
}
