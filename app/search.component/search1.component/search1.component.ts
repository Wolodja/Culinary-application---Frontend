import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({

    selector: 'search1',
    template: require('./search1.component.html!text'),
    styles: [require('./search1.component.css!text')]
})
export class Search1 implements OnInit {

    search: String = '';

    constructor(private router: Router) { }

    ngOnInit(): void {

    }

  send() {
    this.router.navigate(['/step2']);
  }
}