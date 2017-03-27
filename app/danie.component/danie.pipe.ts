import { Danie } from './../danie';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'flyingHeroes' })
export class DaniePipe implements PipeTransform {


  transform(value: Danie[]): Danie[] {

    return value.filter((item: Danie) => item.nazwaDanie.startsWith('z'));



  }

}