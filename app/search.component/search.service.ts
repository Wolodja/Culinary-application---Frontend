import { Request } from './../request';
import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class SearchService implements OnInit {
    name: String = '';

    ngOnInit(): void {
    }

    reciveName(name: String) {
        this.name = name;
    }

    constructor(private http: Http) { }


    postData(request: Request) {
        console.log("Jestm tu "+request.typDania);
        return this.http.post('http://localhost:8080/search', request)
            .map(res => res.json());
    }
}
