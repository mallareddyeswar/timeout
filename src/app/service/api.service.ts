import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay, timeout,map } from 'rxjs/operators';
import { Subject } from 'rxjs';

  

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  errorMsg = new Subject<any>();
  constructor(private httpclient:HttpClient) { }
  
  public getProfile(){
   
     return this.httpclient.get(`https://reqres.in/api/users?page=1`).pipe(delay(16000), timeout(15000)).toPromise()
      .then(res=>{
        return res
      }).catch(error=> this.errorMsg.next(error.message))
    
  }
}
