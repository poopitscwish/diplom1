import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity("equipment")
export class Equipment {
  @PrimaryGeneratedColumn()
  id:number
  @Column()
  title:string
  @Column()
  price:number
  @Column()
  pledge:number
  @Column()
  rental:number
}
