import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";

export class RequestLoggerInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const request = context.switchToHttp().getRequest()
        const formattedRequest = {
	        header: {
                'content-type': request.headers['content-type'],
                'user-agent': request.headers['user-agent'],
                'host:port': request.headers['host'],
            },
	        method: request.method,
	        formData: request.formData,
	        body: request.body,
	        url: request.url,
	        text: request.text,
	      };
	      console.log(`Incoming request to ${request.url} with data`, formattedRequest);
      return next.handle();
    }
}

export class ResponseLoggerInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const response = context.switchToHttp().getResponse()
      return next.handle().pipe(map(data => ({
        status : response.statusCode,
        data : data
      })))
    }
}