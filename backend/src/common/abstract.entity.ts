import { BaseEntity, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";

export abstract class AbstractEntity extends BaseEntity {
    @CreateDateColumn({type:'timestamptz', precision : 0, name:'created_at'})
    createdAt : Date

    @UpdateDateColumn({type:'timestamptz', precision : 0, name:'updated_at'})
    updatedAt : Date

    @DeleteDateColumn({type:'timestamptz', precision : 0, name:'deleted_at', nullable : true})
    deeltedAt : Date
}