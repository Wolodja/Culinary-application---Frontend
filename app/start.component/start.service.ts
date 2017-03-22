import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class StartService{

   constructor ( private  http: Http){}

   getData(){
       return this.http.get('https://httpbin.org/get?name=hannes')
       .map(res=>res.json());
   }


}