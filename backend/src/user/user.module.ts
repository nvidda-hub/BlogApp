import { Module, Provider } from "@nestjs/common";
import { UserService } from "./services/user.service";
import { UserModuleConstants } from "./constants";
import { UserController } from "./controllers/user.controller";

const UserServiceProvider : Provider = {
    provide : UserModuleConstants.USER_SERVICE,
    useClass : UserService
}

@Module({
    providers : [UserServiceProvider],
    controllers : [UserController]
})
export class UserModule {}