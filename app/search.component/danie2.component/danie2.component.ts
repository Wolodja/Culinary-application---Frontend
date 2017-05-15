import { Router } from '@angular/router';
import { SearchService } from './../search.service';
import { Respons } from './../../respons';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'danie2',
    template: require('./danie2.component.html!text'),
    styles: [require('./danie2.component.css!text')]
})
export class Danie2 {

    respons: Respons[];
    selectedRespons: Respons;
    constructor(public searchService: SearchService, private router:Router) { };
    ngOnInit() {
        this.respons = this.searchService.respons;
        console.log(this.respons);
    }

    gotoDetail() {
       this.searchService.selectedRespons=this.selectedRespons;
       console.log(this.selectedRespons);
       this.router.navigate(['/detail']);

    }

    onSelect(resp: Respons) {
        this.selectedRespons=resp;
    }
}