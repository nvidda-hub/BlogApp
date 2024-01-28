import { IsNotEmpty, IsOptional, Matches} from "class-validator"
import { Column } from "typeorm";

export class UpdateUserDto {    
    @IsOptional()
    @Matches(/^((0?[1-9]|[1-2]\d|3[0-1])\/(0?[1-9]|1[0-2])\/(19|20)\d\d)$/)
    email : string;
        
    @IsNotEmpty()
    @Column({name : 'first_name'})
    firstName : string;
    
    @IsOptional()
    @Column({name : 'last_name'})
    lastName : string;
}