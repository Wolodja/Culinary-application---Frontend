import { DetailService } from './detail.service';
import { Danie } from './../danie';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'detail',
    template: require('./detail.component.html!text'),
    styles: [require('./detail.component.css!text')],
    providers: [DetailService]
})
export class DetailComponent implements OnInit {

    danie :Danie={
        idDanie:'',
        nazwaDanie: '',
        opisDanie: '',
        idPrzepis : '',
        idTyp : ''
    };
    id: String;
    private sub: any;


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
                console.log("Finished");
            });

    }

}

