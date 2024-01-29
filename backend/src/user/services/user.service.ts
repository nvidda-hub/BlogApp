import { plainToInstance } from "class-transformer";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import { UserEntity } from "../entities/user.entity";
import { IUserService } from "../interfaces/user.interface";
import { UserRepository } from "../repositories/user.repository";
import * as bcrypt from "bcrypt"
import { UserModuleConstants } from "../constants";
import { ExceptionsHandler } from "@nestjs/core/exceptions/exceptions-handler";
import { HttpException, HttpStatus } from "@nestjs/common";
import { capitilizeString } from "src/common/helper";

export class UserService implements IUserService {
    async createUser(user: CreateUserDto): Promise<boolean> {
        try {
            const insertUser = plainToInstance(UserEntity, {
                email : user.email,
                firstName : capitilizeString(user.firstName),
                lastName : capitilizeString(user.lastName) ?? "",
                username : user.username.toLowerCase(),
                password : await bcrypt.hash(user.password, UserModuleConstants.NUMBER_OF_SALTS)
            })
            await UserRepository.insert(insertUser)
            return true
        } catch(err) {
            console.log(`User creation failed | Reason : ${JSON.stringify(err.message)}`)
            throw new HttpException({
                status : HttpStatus.BAD_REQUEST,
                error : err.message
            }, HttpStatus.BAD_REQUEST, {cause : err})
        }
    }
    async updateUser(id : string, user: UpdateUserDto): Promise<boolean> {
        const insertUser = plainToInstance(UserEntity, {
            email : user.email
        })
        const res = await UserRepository.update(id, insertUser)
        console.log("res : ", res)
        return true
    }
    async getUser(id: string): Promise<UserEntity | UserEntity[]> {
        let user : UserEntity | UserEntity[];
        try {
            if(id){
                user = await UserRepository.find({
                    where : {id : id},
                })
            } else {
                user = await UserRepository.find()

            }
            return user
        } catch(error) {
            
        }
    }
}