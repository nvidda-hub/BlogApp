import { AbstractEntity } from "src/common/abstract.entity";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import {Exclude} from 'class-transformer'

@Entity("users")
export class UserEntity extends AbstractEntity {
    @PrimaryGeneratedColumn("uuid")
    id : string;

    @Column()
    @Index()
    username : string

    @Column()
    email : string

    @Column({name : 'first_name'})
    firstName : string

    @Column({name : 'last_name'})
    lastName : string

    @Column()
    password : string
}