import { LoginlService } from './../login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'register',
    template: require('./register.component.html!text'),
    styles: [require('./register.component.css!text')]
})

export class RegisterComponent {
    model: any = {};
    loading = false;
    er1: boolean = false;
    er2: boolean = false;

    constructor(public loginService: LoginlService,
        private router: Router) { }

    register() {
        this.loading = true;
        if (this.loginService.contains(this.model)) {
            this.er1 = true;
        }
        else{
        this.loginService.addUser(this.model);
        }
    }
}
