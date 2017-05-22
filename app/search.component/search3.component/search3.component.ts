import { Respons } from './../../respons';
import { Request } from './../../request';
import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({

  selector: 'search3',
  template: require('./search3.component.html!text'),
  styles: [require('./search3.component.css!text')],
})
export class Search3 implements OnInit {

  search: String = '';
  request: Request;
  odpowiedz: Respons[] = [];
  cena: String;

  constructor(private router: Router, public searchService: SearchService) { }

  ngOnInit(): void {
    this.request = this.searchService.request;
    console.log(this.request);
  }

  send() {
    /*  this.r = new Request();
      this.r.setNazwaTyp('Salatka');
      this.r.setCena('10');
      this.r.setProdukty(['Marchewka','Cebula','Ziemniaki']);*/
    this.request.cena = this.cena;
    console.log(this.request);
    this.searchService.postData(this.request).subscribe(
      res => {
        this.odpowiedz = res as Respons[];
        this.searchService.respons = this.odpowiedz;
      },
      error => alert(error),
      function () {
        console.log('Finished');
      });
    setTimeout(() => { this.router.navigate(['/result']); }, 500);


  }
}