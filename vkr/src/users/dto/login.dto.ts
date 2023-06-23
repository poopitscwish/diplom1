import { IsNotEmpty } from 'class-validator';
export class LoginUserDto {
  @IsNotEmpty()
  fio: string;
  @IsNotEmpty()
  password: string;
}