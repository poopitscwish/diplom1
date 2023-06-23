import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, Res } from "@nestjs/common";
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { LoginUserDto} from "./dto/login.dto";

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private jwtService:JwtService
  ) {}

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
    const user = this.usersService.create(createUserDto)
    delete (await user).password;
    return user;
  }
  @Post("login")
  async login(
    @Body() loginUserDto:LoginUserDto,
    @Res({passthrough:true}) response:Response) {
    const _user = await this.usersService.login(loginUserDto);
    const errors = 'not found'
    if (!_user) throw new HttpException({ errors }, 401);
    const jwt = await this.jwtService.signAsync({ id: _user.id })
    response.cookie('jwt', jwt, { httpOnly: true })
    return { message: 'success' }
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
