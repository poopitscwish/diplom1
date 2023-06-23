import { Injectable } from "@nestjs/common";
import { CreateEquipmentDto } from "./dto/create-equipment.dto";
import { UpdateEquipmentDto } from "./dto/update-equipment.dto";
import { Equipment } from "./entities/equipment.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class EquipmentsService {
  constructor(
    @InjectRepository(Equipment)
    private readonly equipRepository:Repository<Equipment>
  ) {
  }


  create(createEquipmentDto: CreateEquipmentDto) {
    const equip = new Equipment();
    equip.pledge = createEquipmentDto.pledge;
    equip.rental = createEquipmentDto.rental;
    equip.title = createEquipmentDto.title;
    equip.price = createEquipmentDto.price;
    return this.equipRepository.save(equip)
  }

  findAll() {
    return this.equipRepository.find()
  }

  findOne(id: number) {
    return this.equipRepository.findOneBy({id:id});
  }

  update(id: number, updateEquipmentDto: UpdateEquipmentDto) {
    return this.equipRepository.update(id,updateEquipmentDto);
  }

  async remove(id: number) {
    await this.equipRepository.delete(id);
  }
}
