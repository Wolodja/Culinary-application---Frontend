import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({

    selector: 'search2',
    template: require('./search2.component.html!text'),
    styles: [require('./search2.component.css!text')]
})
export class Search2 implements OnInit {

    search: String = '';

    constructor(private router: Router) { }

    ngOnInit(): void {

    }

  send() {
    this.router.navigate(['/step3']);
  }
}