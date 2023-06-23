import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { JwtModule } from "@nestjs/jwt";
import { SECRET } from "src/config";

@Module({
  imports: [TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: SECRET,
      signOptions: { expiresIn: "1d" }
    })],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {
}
