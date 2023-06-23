import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from "./entities/user.entity";
import * as bcrypt from 'bcrypt';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";
import { LoginUserDto } from "./dto/login.dto";


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository:Repository<User>,
    private jwtService:JwtService
  ) {
  }

  async create(createUserDto: CreateUserDto) {
    const user = new User()
    user.fio = createUserDto.fio
    user.password = await bcrypt.hash(createUserDto.password, 12)
    return this.userRepository.save(user);
  }

  findAll() {
    return `This action returns all users`;
  }

  async login(login:LoginUserDto){
    const fio = login.fio
    const password = login.password
    const user = await this.userRepository.findOneBy({fio})
    if(!user){
      throw new BadRequestException(("Wrong input data"))
    }
    if(!await bcrypt.compare(password, user.password)){
      throw new BadRequestException(("Wrong input data"))
    }
    return user
  }
  findOne(id: number) {
    return `This action returns a #${id} user`;
  }


  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
