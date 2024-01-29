import { Module, NestModule, Provider } from "@nestjs/common";
import { UserModule } from "src/user/user.module";
import { AuthModuleConstants } from "./constants";
import { AuthService } from "./services/auth.service";
import { AuthController } from "./controllers/auth.controller";

const AuthServiceProvider : Provider = {
    provide : AuthModuleConstants.AUTH_SERVICE,
    useClass : AuthService
}

@Module({
    imports : [UserModule],
    providers : [AuthServiceProvider],
    controllers : [AuthController]
})
export class AuthModule {}