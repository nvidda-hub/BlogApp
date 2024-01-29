import * as bcrypt from "bcrypt"
import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { IAuthService, SignInPayload } from "../interfaces/auth.interface";
import { UserRepository } from "src/user/repositories/user.repository";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService implements IAuthService {    
    constructor(
        private readonly jwtService : JwtService
    ){}
    async signin(signInPayload: SignInPayload): Promise<boolean | Object> {
        try {
            const user = await UserRepository.findOne({where : {username : signInPayload.username}})
            if(user){
                const isPasswordMatch = await bcrypt.compare(signInPayload.password, user.password)
                if(isPasswordMatch){
                    const token = await this.jwtService.signAsync({id : user.id, username : user.username})
                    return {
                        "access_token":token,
                        user : user
                    }
                } else {
                    throw new UnauthorizedException()
                }
            } else {
                throw new NotFoundException("User not found")
            }
        } catch(err) {
            console.error(`User authentication failed | Reason : ${JSON.stringify(err.message)} `)
            throw new BadRequestException(err.message)
            
        }
    }
}