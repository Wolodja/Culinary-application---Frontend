import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';



@Injectable()
export class DetailService implements OnInit {
    id:String="";
        
        ngOnInit(): void {
        }
    
    reciveName(id:String){
        this.id=id;
    }


    constructor(private http: Http) { }

    getData() {
        return this.http.get('http://localhost:8080/getid-'+this.id)
            .map(res => res.json());
    }



}