import { 
  HttpEvent, 
  HttpHandler, 
  HttpHeaders, 
  HttpInterceptor, 
  HttpInterceptorFn, 
  HttpRequest 
} from '@angular/common/http';
import { Injectable, AfterContentInit } from '@angular/core';
import { request } from 'express';
import { Observable } from 'rxjs';



@Injectable() 
export class RequestInterceptor implements HttpInterceptor {

  constructor () {}

  intercept(request: HttpRequest<any>, 
    next: HttpHandler
  ):Observable<HttpEvent<any>> {
    console.log('Request Interceptor', request);
    if(request.method === 'POST'){
    const newRequest = request.clone({
       headers: new HttpHeaders({ token: '1231231244fsdfas' })
    });
    return next.handle(newRequest);
    }
    return next.handle(request);
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
