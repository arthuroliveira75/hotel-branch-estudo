import { 
  HttpEvent, 
  HttpHandler, 
  HttpInterceptor, 
  HttpInterceptorFn, 
  HttpRequest 
} from '@angular/common/http';
import { Injectable, AfterContentInit } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable() 
export class RequestInterceptor implements HttpInterceptor {

  constructor () {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler):Observable<HttpEvent<unknown>> 
  {
    debugger;
    console.log('Request Interceptor', req);
    return next.handle(req);
  } 
}



// export const RequestInterceptor: HttpInterceptorFn = (req, next) => {
//   console.log('Request Interceptor', req);
//   return next(req);
// };

// export class AtheIntercpetor implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     console.log('Request Interceptor.', req);
    
//   }
  
// }
