import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity("clients")
export class Client {
  @PrimaryGeneratedColumn()
  id:number
  @Column()
  fio:string
  @Column()
  adress:string
  @Column()
  phone:string
}
