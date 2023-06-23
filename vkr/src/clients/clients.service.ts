import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from "./entities/client.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository:Repository<Client>
  ) {
  }

  create(createClientDto: CreateClientDto) {
    const client = new Client()
    client.fio = createClientDto.fio
    client.adress  = createClientDto.adress
    client.phone = createClientDto.phone
    return this.clientRepository.save(client)
  }

  findAll() {
    return this.clientRepository.find()
  }

  async findOne(id: number){
    return this.clientRepository.findOneBy({id:id});
  }

  async update(id: number, updateJobTitleDto: UpdateClientDto) {
    return this.clientRepository.update(id,updateJobTitleDto);
  }

  remove(id: number) {
    return this.clientRepository.delete(id)
  }
}
