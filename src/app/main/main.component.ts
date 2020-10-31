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
  showCard:boolean=true;
  showError:boolean=false
  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.getProfileList()
  }

  getProfileList(){
    this.apiservice.getProfile().subscribe(res=>{
      console.log(res['data'])
      this.profile = res['data']
      setTimeout(()=>{                          
        this.showCard=false;
        this.showError=true
   }, 15000);
      
    })

  }

}
