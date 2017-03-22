import { StartService } from './start.service';
import { Component } from '@angular/core';

@Component({
    selector:'start',
    template: require('./start.component.html!text'),
    styles: [require('./start.component.css!text')]
})
export class StartComponent{
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