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

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public loginService: LoginlService) { }

    ngOnInit() {

    }
    fff(){}
    login() {

        console.log(this.model.username, this.model.password);
        this.loading = true;
        let a =this.loginService.login(this.model.username, this.model.password);
        console.log(a);

       /* this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });*/
    }
}
