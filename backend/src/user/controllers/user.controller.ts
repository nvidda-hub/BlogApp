import { Body, Controller, Get, Inject, Param, Patch, Post, Query, UseInterceptors } from "@nestjs/common";
import { UserModuleConstants } from "../constants";
import { IUserService } from "../interfaces/user.interface";
import { CreateUserDto } from "../dto/create-user.dto";
import { RequestLoggerInterceptor, ResponseLoggerInterceptor } from "src/common/interceptors/req-res.interceptor";
import { UpdateUserDto } from "../dto/update-user.dto";

@UseInterceptors(ResponseLoggerInterceptor, RequestLoggerInterceptor)
@Controller('user')
export class UserController {
    constructor(
        @Inject(UserModuleConstants.USER_SERVICE)
        private readonly userService : IUserService
    ){}

    @Post()
    async CreateUser(@Body() user : CreateUserDto) {
        return await this.userService.createUser(user)
    }

    @Patch(':id/update')
    async UpdateUser(@Param('id') id : string, @Body() user : UpdateUserDto) {
        return await this.userService.updateUser(id, user)
    }

    @Get()
    async getUser(@Query('id') id : string) {
        return await this.userService.getUser(id)
    }
}