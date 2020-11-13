import {  Injectable, InjectionToken } from '@angular/core';
import {  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import {ApiService} from './service/api.service';



@Injectable()
export class TimeoutInterceptor implements HttpInterceptor {
  constructor(private apiservice:ApiService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    return next.handle(req).pipe(timeout(14000),
    catchError((err) => {
      this.apiservice.errorMsg.next(err.message)
      // console.log( err.message)
      throw 'error in source. Details: ' + err;
     
     
    })
    )
    
   
  }
 
  
}