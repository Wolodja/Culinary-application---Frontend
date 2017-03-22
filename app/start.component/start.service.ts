import { data } from './../data';
import { Danie } from './../danie';
import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';



@Injectable()
export class StartService implements OnInit {
        
        danies: Danie[];
        ngOnInit(): void {
            this.danies=data;
        }


    constructor(private http: Http) { }

    getData() {
        return this.http.get('https://httpbin.org/get?name=hannes')
            .map(res => res.json());
    }



}