import { Add } from './../add';
import { Type } from './../type';
import { SkladnikiAll } from './../skladnikiAll';
import { Injectable, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class AddService implements OnInit {

    ngOnInit(): void {
    }


    constructor(private http: Http) {
    }

    getTypes(): Observable<Type[]> {
        return this.http.get('http://localhost:8080/getTyp-all')
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

    getAllSkladniki(): Observable<SkladnikiAll[]> {
        return this.http.get('http://localhost:8080/rodprod')
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    addDanie(body: Add): Observable<any> {

        let bodyString = JSON.stringify(body); // Stringify payload
        console.log(bodyString);
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post('http://localhost:8080/add', body, options) // ...using post request
            .map((res: any) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }
}
