import dataSoruce from "database/data-source";
import { UserEntity } from "../entities/user.entity";

export const UserRepository = dataSoruce.getRepository(UserEntity).extend({
    
})