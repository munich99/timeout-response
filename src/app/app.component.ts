import { Component, OnInit } from '@angular/core';

import { WebrequestService } from './services/webrequest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'timeout-response';
  response:any;
  time:number = 4000;

  constructor(public _WebrequestService:WebrequestService ){}

  ngOnInit(){

  }

  onClickResponse(){
    this._WebrequestService.sendRequest(this.time).subscribe(
      (response) => {
        this.response = response;
      },
      (error) => {
        this.response = "to slow " + error;
      });
  }
}
