import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ApiService} from './../service/api.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  profile:any

  textshowen = "Waiting for Response"
  constructor(private apiservice:ApiService) {
    this.apiservice.errorMsg.subscribe(res=>{
  
      this.textshowen = res
      
     })
   }

  ngOnInit(): void {
    this.getProfileList()
  }

  getProfileList(){
   this.apiservice.getProfile().subscribe(res=>{
     console.log(res)
   })

  }

}
