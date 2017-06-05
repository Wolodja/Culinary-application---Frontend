import { SkladnikiAll } from './../skladnikiAll';
import { Respons } from './../respons';
import { Request } from './../request';
import { Injectable, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class SearchService implements OnInit {

    public request: Request;
    public respons: Respons[];
    public selectedRespons: Respons;
    ngOnInit(): void {
    }

    constructor(private http: Http) { }

    postData(body: Request): Observable<Respons[]> {

        let bodyString = JSON.stringify(body); // Stringify payload
        console.log(bodyString);
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post('http://localhost:8080/send/test2', body, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }

    getAllSkladniki(): Observable<SkladnikiAll[]> {
        return this.http.get('http://localhost:8080/rodprod')
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
