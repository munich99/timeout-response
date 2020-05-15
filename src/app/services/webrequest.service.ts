import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WebrequestService {

  constructor(private _HttpClient:HttpClient) {    }

  sendRequest(time:number){
    
    console.log(time);
    
    return this._HttpClient.get('http://slowwly.robertomurray.co.uk/delay/3000/url/https://jsonplaceholder.typicode.com/posts')
            .pipe(
              timeout(3500)
            );
  }
}
