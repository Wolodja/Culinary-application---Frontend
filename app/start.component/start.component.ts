import { data } from './../data';
import { Danie } from './../danie';
import { StartService } from './start.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'start',
  template: require('./start.component.html!text'),
  styles: [require('./start.component.css!text')],
  providers: [StartService]
})
export class StartComponent implements OnInit {


        ngOnInit(): void {
            
            
        }

  getDataa: String;


  constructor(private startService: StartService) { }

  onGet() {
    this.startService.getData()
      .subscribe(
      data => this.getDataa = JSON.stringify(data),
      error => alert(error),
      () => console.log("Finished")
      );

  }
}