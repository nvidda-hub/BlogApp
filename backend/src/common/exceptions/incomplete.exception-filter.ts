import { ArgumentsHost, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { IncompleteDataException } from "./incomplete.exception";

export class IncompleteDataExceptionFilter implements ExceptionFilter {
    catch(exception: IncompleteDataException, host: ArgumentsHost) {
        const messageBody = {
            message : exception.message,
            error : exception.message,
            name : exception.name,
            code : 400,
            success : false
        }
        const ctx = host.switchToHttp()
        const response = ctx.getResponse()
        response.status(HttpStatus.BAD_REQUEST).json(messageBody)
    }
}