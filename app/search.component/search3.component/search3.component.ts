import { Request } from './../../request';
import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({

    selector: 'search3',
    template: require('./search3.component.html!text'),
    styles: [require('./search3.component.css!text')],
    providers: [SearchService]
})
export class Search3 implements OnInit {

    search: String = '';
    r : Request;

    constructor(private router: Router, private searchService: SearchService) { }

    ngOnInit(): void {

    }

  send() {
    this.r = new Request('Salatka', 4, ['marchewka', 'cebula']);
    this.searchService.postData(this.r);
    
  }
}