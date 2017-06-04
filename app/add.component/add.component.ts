import { Observable } from 'rxjs/Observable';
import { Add, Produkt } from './../add';
import { Type } from './../type';
import { Danie } from './../danie';
import { AddService } from './add.service';
import { Router } from '@angular/router';
import { SkladnikiAll } from './../skladnikiAll';
import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'add',
    template: require('./add.component.html!text'),
    styles: [require('./add.component.css!text')],
    providers: [AddService]

}) export class AddComponent {


    skladnikii: SkladnikiAll[];//+
    types: Type[];  //+
    danie: Add = new Add();
    filteredItems: String[];
    test: String[] = [];
    test2: String[] = [];
    name: String;
    photo: boolean = false;
    photo2: boolean = false;
    ilosc: boolean = false;
    error1: boolean = false;
    error2: boolean = false;
    error3: boolean = false;
    success: boolean = false;
    amount: number;
    errorM: String;
    fileName: String;
    fileName2: String;
    name2: String;




    fileEvent2(fileInput: any) {
        let file = fileInput.target.files[0];
        this.fileName = file.name;
        let src = fileInput.target.result;
        document.getElementById("image").src = src;
        this.photo = true;
        //this.danie.zdjecieDanie =' '+ fileName+'';
        console.log(this.fileName);
    }


    fileEvent(event: any) {
        var reader = new FileReader();
        var src;
        let file = event.target.files[0];
        this.fileName = file.name;
        reader.onload = function (e) {
            // get loaded data and render thumbnail.
            src = e.target.result;
            document.getElementById("image").src = src;

            // setSrc(src);

        };

        ;
        this.photo = true;
        this.photo2 = true;

        // read the image file as a data URL.
        reader.readAsDataURL(event.target.files[0]);

        /*        let fileList: FileList = event.target.files;
              if (fileList.length > 0) {
                  let file: File = fileList[0];
                  this.danie.zdjecieDanie.append('uploadFile', file, file.name);
                  console.log("dotarlem");
                        let headers = new Headers();
                          headers.append('Content-Type', 'multipart/form-data');
                          headers.append('Accept', 'application/json');
                          let options = new RequestOptions({ headers: headers });
                          this.http.post(`${this.apiEndPoint}`, formData, options)
                              .map(res => res.json())
                              .catch(error => Observable.throw(error))
                              .subscribe(
                                  data => console.log('success'),
                                  error => console.log(error)
                              )
                      }*/


    }
    setSrc() {

        let aaa = document.getElementById("image").src;
        this.danie.zdjecieDanie = aaa;
    }

    set(value: String) {
        console.log(value);
        this.name = value;
        this.assignCopy();
        this.ilosc = true;

    }

    assignCopy() {
        this.filteredItems = Object.assign([], this.test);
    };
    filterItem(value: String) {
        this.error3 = false;
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


    constructor(private router: Router, public addService: AddService, private element: ElementRef) { }


    ngOnInit(): void {
        console.log('Weszlem');
        this.name2 = this.getCookie('name');
        console.log(this.name2);
        if (this.name2 == '') {
            this.router.navigate(['/login']);
        }
    



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
    this.fileName2 = document.getElementById("image").src;
    console.log(this.fileName2)

    this.danie.zdjecieDanie = this.fileName;
    console.log(this.danie.zdjecieDanie);

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
getCookie(cname: String) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


}