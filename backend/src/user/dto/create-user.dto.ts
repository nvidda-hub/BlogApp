import {IsNotEmpty, IsOptional, IsUUID, Matches} from "class-validator"
import { Column } from "typeorm";

export class CreateUserDto {
    @IsUUID()
    id : string
    
    @IsNotEmpty()
    username : string;
    
    @IsNotEmpty()
    @Column({name : 'first_name'})
    firstName : string;
    
    @IsOptional()
    @Column({name : 'last_name'})
    lastName : string;
    
    @IsNotEmpty()
    @Matches(/^((0?[1-9]|[1-2]\d|3[0-1])\/(0?[1-9]|1[0-2])\/(19|20)\d\d)$/)
    email : string;
    
    @IsNotEmpty()
    password : string;
}