import { Request } from './../../request';
import { SearchService } from './../search.service';
import { SkladnikiAll } from './../../skladnikiAll';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({

  selector: 'search2',
  template: require('./search2.component.html!text'),
  styles: [require('./search2.component.css!text')]
})
export class Search2 implements OnInit {
  skladnikii: SkladnikiAll[];
  show: boolean = false;
  selectedValue: String = '';
  lista: String[] = [];
  request: Request;

  constructor(private router: Router, public searchService: SearchService) { }

  ngOnInit(): void {
    this.request = this.searchService.request;
    console.log(this.request);

    this.searchService.getAllSkladniki()
      .subscribe(
      res => {
        this.skladnikii = res as SkladnikiAll[];
        console.log(this.skladnikii);
      },
      error => alert(error),
      function () {
        console.log('Finished');
      });
  }

  addOrRemove(nazwa: String) {

    if (this.contains(nazwa)) {
      this.remove(nazwa);
      if (this.lista.length === 0) {
        this.show = false;
      }
    } else {
      this.lista.push(nazwa);
      this.show = true;
    }
  }

  contains(nazwa: String): boolean {
    let i = this.lista.length;
    while (i--) {
      if (this.lista[i] === nazwa) {
        return true;
      }
    }
    return false;
  }

  remove(nazwa: String) {
    let index = this.lista.indexOf(nazwa);
    if (index > -1) {
      this.lista.splice(index, 1);
    }
  }

  send() {
    this.router.navigate(['/step3']);
  }

  ngOnDestroy() {
    console.log(this.request);
    this.request.produkty = this.lista;
    this.searchService.request = this.request;
  }
}
