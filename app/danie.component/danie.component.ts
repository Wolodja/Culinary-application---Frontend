import { Router } from '@angular/router';
import { DanieService } from './danie.service';
import { Danie } from './../danie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'danie',
    template: require('./danie.component.html!text'),
    styles: [require('./danie.component.css!text')]
})
export class DanieComponent implements OnInit {

    danies: Danie[];
    name: String;
    niema = '';
    private sub: any;
    selectedDanies: Danie;


    constructor(private danieService: DanieService, private route: ActivatedRoute, private router: Router) {}
    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.name = params['name'];
        });

        this.danieService.reciveName(this.name);

        this.danieService.getData()
            .subscribe(
            res => {
                this.danies = res as Danie[];
                if (this.danies.length === 0) {
                    this.niema = 'Nie znaleziono dań!';
                };
            },
            error => alert(error),
            function () {
                console.log('Finished');
            });

    }
    onSelect(danie: Danie) {
        this.selectedDanies = danie;
    }
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedDanies.idDanie]);
    }

}

