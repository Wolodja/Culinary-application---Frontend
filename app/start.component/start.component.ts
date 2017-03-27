import { DanieService } from './../danie.component/danie.service';
import { Observable } from 'rxjs/Observable';
import { data } from './../data';
import { Danie } from './../danie';
import { StartService } from './start.service';
import { Component, OnInit, Pipe, PipeTransform, ViewChild, ElementRef } from '@angular/core';
import 'rxjs/Rx';
import { Router } from "@angular/router";
@Component({
  selector: 'start',
  template: require('./start.component.html!text'),
  styles: [require('./start.component.css!text')],
  providers: [StartService, DanieService]
})
export class StartComponent implements OnInit {

  d: Danie;
  search: String;
  ngOnInit(): void {

    this.search = '';
  }


  send() {
    this.router.navigate(['/danies', this.search]);
  }


  constructor(private startService: StartService, private danieService: DanieService, private router: Router) { }



}

