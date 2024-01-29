import { CreateUserDto } from "src/user/dto/create-user.dto";

export interface SignInPayload {
    username : string,
    password : string
}

export interface IAuthService {
    // signUp(user : CreateUserDto) : Promise<boolean>,
    signin(singInPayload : SignInPayload) : Promise<boolean>,
}