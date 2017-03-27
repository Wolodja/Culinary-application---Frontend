import { DaniePipe } from './danie.pipe';
import { DanieService } from './danie.service';
import { data } from './../data';
import { Danie } from './../danie';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'danie',
    template: require('./danie.component.html!text'),
    styles: [require('./danie.component.css!text')]
})
export class DanieComponent implements OnInit {

    danies: Danie[] = [];
    name = "z";
    niema = "";
    private sub: any;

    constructor(private danieService: DanieService, private route: ActivatedRoute, ) { }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.name = params['name'];
        });

        this.danieService.reciveName(this.name);

        this.danieService.getData()
            .subscribe(
            res => {
            this.danies = res as Danie[];
                if (this.danies.length == 0) {
                    this.niema = "Nie znaleziono dań!";
                };
            },
            error => alert(error),
            function () {
                console.log("Finished");
            });

    }

}

