import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

  

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  errorMsg = new Subject<any>();
   myCors(req, res, nxt) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, Content-Type, Accept, Accept-Language, Origin, User-Agent');
    if(req.method === 'OPTIONS') {
        res.sendStatus(204);
    }
    else {
        nxt();
    }
}
  constructor(private httpclient:HttpClient) { }
  
  
  public getProfile(){
   
     return this.httpclient.get(`http://slowwly.robertomurray.co.uk/delay/16000/url/https://jsonplaceholder.typicode.com/todos/1` )
  }
}
