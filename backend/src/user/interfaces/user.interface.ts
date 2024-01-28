import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import { UserEntity } from "../entities/user.entity";

export interface IUserService {
    createUser(user : CreateUserDto) : Promise<boolean>,
    updateUser(id : string, user : UpdateUserDto) : Promise<boolean>,
    getUser(id : string) : Promise<UserEntity | UserEntity[]>,
}