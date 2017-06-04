import { Router } from '@angular/router';
import { User } from './user';
import { Injectable, OnInit } from '@angular/core';




@Injectable()
export class LoginlService implements OnInit {

    firstUser: User = { firstName: 'Dima', lastName: 'Martyniuk', username: 'superlogin', password: 'qwerty' }
    logins: User[] = [];


    ngOnInit(): void {

        this.logins.push(this.firstUser);
        console.log('dodalem');
    }

    login(l: String, p: String): String {

        this.logins.push(this.firstUser);
        for (let i = 0; i < this.logins.length; i++) {
            if (this.logins[i].username == l && this.logins[i].password == p) {
                console.log('co');
                return this.logins[i].lastName;
            }
        }
        return '-1';
    }
    addUser(u: User) {
        this.logins.push(u);

        let timeoutId = setTimeout(() => {
            this.router.navigate(['/login']);
        }, 1000);

    }
    contains(u: User): boolean {
        console.log(this.logins);
        for (let i = 0; i < this.logins.length; i++) {
            if (this.logins[i].username==u.username)
                return true;
        }
            return false;
        
    }

    constructor(private router: Router) { }


}
