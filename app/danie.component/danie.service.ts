import { data } from './../data';
import { Danie } from './../danie';
import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';



@Injectable()
export class DanieService implements OnInit {
    name:String="";
        
        ngOnInit(): void {
        }
    
    reciveName(name:String){
        this.name=name;
    }


    constructor(private http: Http) { }

    getData() {
        return this.http.get('http://localhost:8080/get-name-'+this.name)
            .map(res => res.json());
    }



}