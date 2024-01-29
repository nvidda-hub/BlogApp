import { plainToInstance } from "class-transformer";
import * as bcrypt from "bcrypt"
import { ExceptionsHandler } from "@nestjs/core/exceptions/exceptions-handler";
import { BadRequestException, HttpException, HttpStatus } from "@nestjs/common";
import { IAuthService, SignInPayload } from "../interfaces/auth.interface";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { UserRepository } from "src/user/repositories/user.repository";

export class AuthService implements IAuthService {    
    async signin(signInPayload: SignInPayload): Promise<boolean> {
        try {
            const user = await UserRepository.findOne({where : {username : signInPayload.username}})
            if(user){
                const isPasswordMatch = await bcrypt.compare(signInPayload.password, user.password)
                if(isPasswordMatch){
                    console.log("User authorized!!")
                    return true
                }
            }
        } catch(err) {
            console.error(`User authentication failed | Reason : ${JSON.stringify(err.message)} `)
            throw new BadRequestException(err.message)
            
        }
        return false   
    }
}