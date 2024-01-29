import { Body, Controller, Get, Inject, Param, Patch, Post, Query, UseFilters, UseInterceptors } from "@nestjs/common";
import { AuthModuleConstants } from "../constants";
import { IAuthService, SignInPayload } from "../interfaces/auth.interface";
import { RequestLoggerInterceptor, ResponseLoggerInterceptor } from "src/common/interceptors/req-res.interceptor";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { UserModuleConstants } from "src/user/constants";
import { IUserService } from "src/user/interfaces/user.interface";
import { IncompleteDataExceptionFilter } from "src/common/exceptions/incomplete.exception-filter";

@UseInterceptors(ResponseLoggerInterceptor, RequestLoggerInterceptor)
@UseFilters(IncompleteDataExceptionFilter)
@Controller('auth')
export class AuthController {
    constructor(
        @Inject(AuthModuleConstants.AUTH_SERVICE)
        private readonly authService : IAuthService,

        @Inject(UserModuleConstants.USER_SERVICE)
        private readonly userService : IUserService,
    ){}

    @Post()
    async signUp(@Body() user : CreateUserDto) {
        return await this.userService.createUser(user)
    }

    @Post('sign-in')
    async signIn(@Body() user : SignInPayload) {
        return await this.authService.signin(user)
    }
}