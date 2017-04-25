import { DanieService } from './../danie.component/danie.service';
import { Danie } from './../danie';
import { StartService } from './start.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Router } from '@angular/router';
@Component({
  selector: 'start',
  template: require('./start.component.html!text'),
  styles: [require('./start.component.css!text')],
  providers: [StartService, DanieService]
})
export class StartComponent implements OnInit {

  d: Danie;
  search: String;
  isValid: boolean = true;
  ngOnInit(): void {

    this.search = '';
  }


  send() {
    this.router.navigate(['/danies', this.search]);
  }

  isValidForm() {
    if (this.search === '') {
      this.isValid = false;
    } else {
      this.isValid = true;
    }
    return this.isValid;
  }


  constructor(private startService: StartService, private danieService: DanieService, private router: Router) { }



}

