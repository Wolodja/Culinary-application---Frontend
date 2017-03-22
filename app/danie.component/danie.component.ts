import { data } from './../data';
import { Danie } from './../danie';
import { Component, OnInit } from '@angular/core';


@Component({
selector:'danie',
template: require('./danie.component.html!text'),
styles:[require('./danie.component.css!text')]
})
export class DanieComponent implements OnInit {

    danies: Danie[];

        ngOnInit(): void {
            this.danies=data;
            
        }



}