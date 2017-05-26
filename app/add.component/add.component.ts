import { Add, Produkt } from './../add';
import { Type } from './../type';
import { Danie } from './../danie';
import { AddService } from './add.service';
import { Router } from '@angular/router';
import { SkladnikiAll } from './../skladnikiAll';
import { Component } from '@angular/core';

@Component({
    selector: 'add',
    template: require('./add.component.html!text'),
    styles: [require('./add.component.css!text')]

}) export class AddComponent {


    skladnikii: SkladnikiAll[];//+
    types: Type[];  //+
    danie: Add = new Add();
    filteredItems: String[];
    test: String[] = [];
    test2: String[] = [];
    name: String;
    ilosc: boolean = false;
    error1: boolean = false;
    error2: boolean = false;
    error3: boolean = false;
    success: boolean = false;
    amount: number;
    errorM: String;


    set(value: String) {
        console.log(value);
        // this.filteredItems = Object.assign([], this.test2).filter(
        //       item => item.toLowerCase().indexOf(value.toLowerCase()) > -1
        // );
        this.name = value;
        this.assignCopy();
        this.ilosc = true;
    }

    assignCopy() {
        this.filteredItems = Object.assign([], this.test);
    };
    filterItem(value: String) {
        if (!value || value.length < 3) this.assignCopy();
        else { //when nothing has typed
            this.filteredItems = Object.assign([], this.test2).filter(
                item => item.toLowerCase().indexOf(value.toLowerCase()) > -1
            );
        }
    };

    dodajSkladnik() {
        if (!this.name) {
            this.error1 = true;
            this.error2 = false;
        }
        else if (!this.amount || this.amount <= 0) {
            this.error1 = false;
            this.error2 = true;
        }
        else {
            this.error1 = false;
            this.error2 = false;
            this.ilosc = false;
            let p: Produkt = { nazwaProdukt: this.name, iloscProdukt: this.amount };
            this.name = '';
            this.amount = 0;
            this.danie.produkty.push(p);
            console.log(this.name + ' ' + this.amount);
        }
    }


    constructor(private router: Router, public addService: AddService) { }


    ngOnInit(): void {


        this.addService.getAllSkladniki()
            .subscribe(
            res => {
                this.skladnikii = res as SkladnikiAll[];
                for (let i = 0; i < this.skladnikii.length; i++) {
                    for (let j = 0; j < this.skladnikii[i].produktList.length; j++) {
                        this.test2.push(this.skladnikii[i].produktList[j]);
                    }
                }
            },
            error => alert(error),
            function () {
                console.log('Finished');
            });

        this.addService.getTypes()
            .subscribe(
            res => {
                this.types = res as Type[];
            },
            error => alert(error),
            function () {
                console.log('Finished');
            });

        this.assignCopy();
    }

    dodaj() {
        console.log('jestem');
        if (!this.danie.nazwaDanie) {
            this.errorM = 'Nie wprowadzono nazwe dania!';
            this.error3 = true;
        } else if (!this.danie.opisDanie) {
            this.errorM = 'Nie wprowadzono opis dania!';
            this.error3 = true;
        } else if (this.danie.czasPrzepis <= 0) {
            this.errorM = 'Czas przygotowania powinien być większy od zera!';
            this.error3 = true;
        } else if (!this.danie.zdjecieDanie) {
            this.errorM = 'Nie wprowadzono zdjęcie dania!';
            this.error3 = true;
        } else if (!this.danie.nazwaTyp) {
            this.errorM = 'Nie wybrano typ dania!';
            this.error3 = true;
        } else if (!this.danie.opisPrzepis) {
            this.errorM = 'Nie wprowadzono przepis dania!';
            this.error3 = true;
        } else if (this.danie.produkty.length === 0) {
            this.errorM = 'Nie wybrano skladników!';
            this.error3 = true;

        }

        else {
            this.error3 = false;
            console.log(this.danie);
            this.addService.addDanie(this.danie).subscribe(
                res => {
                    this.success = true;
                    this.danie = new Add();
                },
                error => alert(error),
                function () {
                    console.log('Finished');
                });
        }
    }

}