import { SearchService } from './../search.service';
import { Request } from './../../request';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({

  selector: 'search1',
  template: require('./search1.component.html!text'),
  styles: [require('./search1.component.css!text')]
})
export class Search1 implements OnInit {

  nazwa: String = '';
  types: String[];
  show: boolean = false;
  request: Request;

  constructor(private router: Router, public searchService: SearchService) {
    this.request = new Request();
  }

  change() {
    if (this.nazwa === '') {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  ngOnInit(): void {
    this.show = false;
    this.types = ['Salatka', 'Makaron', 'Frittata', 'Mieso', 'Marvnata', 'Pasta', 'Steki', 'Pierogi', 'Burrito', 'Kurczak', 'Pizza'];
  }

  send() {

    if (this.nazwa === '') {
      this.show = true;
    } else {
      this.request.setNazwaTyp(this.nazwa);
      this.router.navigate(['/step2']);
    }
  }

  ngOnDestroy() {
    this.request.nazwaTyp = this.nazwa;
    this.searchService.request = this.request;
  }
}
