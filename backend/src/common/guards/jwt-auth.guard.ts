import { CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { Observable } from "rxjs";

export class JWTAuthGuard implements CanActivate {
    constructor(
        private jwtService : JwtService
    ){}
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest()
        const token = this.extractToeknFromHeader(request)
        if(!token){
            throw new UnauthorizedException()
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {secret : process.env.JWT_AUTH_SECRET_KEY})
            request['user'] = payload
        } catch(error){
            throw new UnauthorizedException()
        }
        return true
    }
    extractToeknFromHeader(request : Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? []
        return type === 'Bearer' ? token : undefined
    }
}