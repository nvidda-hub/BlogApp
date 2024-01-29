import { NestMiddleware } from "@nestjs/common";

export class ErrorMiddleware implements NestMiddleware {
    private err : any
    constructor(err : any){
        this.err = err
    }
    use(req: any, res: any, next: (error?: any) => void) {
        const statusCode = res.statusCode || 500
        const message = this.err || "Internal Server Error"
        return {
            success : false,
            statusCode,
            message
        }
    }
}