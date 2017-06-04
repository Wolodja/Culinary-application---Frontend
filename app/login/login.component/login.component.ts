import { LoginlService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
    selector: 'login',
    template: require('./login.component.html!text'),
    styles: [require('./login.component.css!text')]
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    er1: boolean = false;
    er2: boolean = false;
    name: String = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public loginService: LoginlService) { }

    ngOnInit() {

    }
    fff() { }
    login() {

        let a = this.loginService.login(this.model.username, this.model.password);
        if (a == '-1') {
            this.er1 = true;
        } else {

            this.loading = true;
            this.er1 = false;
            this.name = a;
            this.er2 = true;
            this.setCookie('name',a,5);
            let timeoutId = setTimeout(() => {
                this.router.navigate(['/add']);
            }, 1000);
        }
    }
    setCookie(cname: String, cvalue: String, exdays: number) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
}
