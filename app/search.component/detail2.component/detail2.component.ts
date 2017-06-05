import { SearchService } from './../search.service';
import { Respons } from './../../respons';
import { Component} from '@angular/core';


@Component({

    selector: 'detail2',
    template: require('./detail2.component.html!text'),
    styles: [require('./detail2.component.css!text')]
})
export class Detail2 {

    respons: Respons;
    suma: number = 0;

    ngOnInit() {
        this.respons = this.searchService.selectedRespons;
        if (this.respons.isIn.length > 0) {

            for (let i = 0; i < this.respons.isIn.length; i++) {
                this.suma += this.respons.isIn[i].cenaProdukt;
            }
        };
        if (this.respons.isNotIn.length > 0) {

            for (let i = 0; i < this.respons.isNotIn.length; i++) {
                this.suma += this.respons.isNotIn[i].cenaProdukt;
            }
        };
    }
    constructor(public searchService: SearchService) { }
}
