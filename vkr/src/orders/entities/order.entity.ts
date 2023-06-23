import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "../../clients/entities/client.entity";
import { Equipment } from "../../equipments/entities/equipment.entity";
@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(()=>Client, (client)=>client.fio)
  client_fio: string;
  @ManyToOne(()=>Equipment, (equipment)=>equipment.title)
  equipment_title: string;
  @Column()
  days: number;
  @ManyToOne(()=>Equipment, (equipment)=>equipment.rental)
  equip_rental: number;
  @ManyToOne(()=>Equipment, (equipment)=>equipment.pledge)
  equip_pledge: number;
  @Column()
  total: number;
  @Column()
  status:string
}
