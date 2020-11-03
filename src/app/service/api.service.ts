import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpclient:HttpClient) { }
  
  public getProfile(){
   
    return this.httpclient.get(`https://reqres.in/api/users?page=1`,{ headers: new HttpHeaders({ timeout: `${20000}` }) })
    
      
    
  }
}
