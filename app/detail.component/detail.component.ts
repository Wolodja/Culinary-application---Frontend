import { Skladnik } from './../skladnik';
import { DetailService } from './detail.service';
import { Danie } from './../danie';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'detail',
    template: require('./detail.component.html!text'),
    styles: [require('./detail.component.css!text')],
    providers: [DetailService]
})
export class DetailComponent implements OnInit {

    danie: Danie = {
        nazwaTyp: '',
        opisPrzepis: '',
        czasPrzepis: 0,
        nazwaDanie: '',
        idDanie: '',
        opisDanie: '',
        zdjecieDanie: ''
    };
    skladniki: Skladnik[];

    id: String;
    private sub: any;
    niema = '';
    suma: number;


    constructor(private route: ActivatedRoute, private router: Router, private detailService: DetailService) { }


    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
        });


        this.detailService.reciveName(this.id);

        this.detailService.getData()
            .subscribe(
            res => {
                this.danie = res as Danie;
            },
            error => alert(error),
            function () {
                console.log('Finished');
            });


        this.detailService.getComponents()
            .subscribe(
            res => {
                this.skladniki = res as Skladnik[];
                if (this.skladniki.length === 0) {
                    this.suma = 0;
                };
                if (this.skladniki.length > 0) {
                    this.suma=0;
                    for (let i=0; i<this.skladniki.length;i++ ){
                        this.suma+= this.skladniki[i].wartosc;
                    }
                     
                };

            },
            error => alert(error),
            function () {
                console.log('Finished');
            });

    }

}

