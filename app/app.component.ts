import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: require('app/app.component.html!text'),
  styles: [require('./app.component.css!text')]
})
export class AppComponent {

  cookie: boolean = false;
  noCookie: boolean = true;
  name: String;

  constructor(private router: Router) { }

  getCookie(cname: String) {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
  myFunction() {

    this.name = this.getCookie('name');
    if (this.name !== '') {
      this.cookie = true;
      this.noCookie = false;
    }
  }
  delete() {
    console.log('sylogowamo');
    this.cookie = false;
    this.noCookie = true;
    document.cookie = 'name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    this.router.navigate(['/login']);
  }
}
