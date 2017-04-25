import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class DetailService implements OnInit {
    id: String = '';

    ngOnInit(): void {
    }
    reciveName(id: String) {
        this.id = id;
    }


    constructor(private http: Http) { }

    getData() {
        return this.http.get('http://localhost:8080/danie/' + this.id)
            .map(res => res.json());
    }

    getComponents() {
        return this.http.get('http://localhost:8080/produktIdDania/' + this.id)
            .map(res => res.json());
    }
}
