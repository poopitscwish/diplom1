import { Injectable } from "@nestjs/common";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { Repository } from "typeorm";
import { Order } from "./entities/order.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>
  ) {
  }

  create(createOrderDto: CreateOrderDto) {
    const order = new Order();
    order.days = createOrderDto.days;
    order.client_fio = createOrderDto.client_fio;
    order.equip_pledge = createOrderDto.equip_pledge;
    order.equip_rental = createOrderDto.equip_rental;
    order.equipment_title = createOrderDto.equipment_title;
    order.status = createOrderDto.status;
    return this.orderRepository.save(order);
  }


  findAll() {
    return this.orderRepository.find();
  }

  findOne(id: number) {
    return this.orderRepository.findOneBy({ id: id });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.orderRepository.update(id, updateOrderDto);
  }

  remove(id: number) {
    return this.orderRepository.delete(id);
  }
}
