export class Add {
    nazwaTyp: String;
    opisPrzepis: String;
    czasPrzepis: number;
    nazwaDanie: String;
    opisDanie: String;
    zdjecieDanie: String;
    produkty:Produkt[];
        constructor(){
    /*    this.nazwaTyp='';
        this.opisPrzepis='';
        this.czasPrzepis=0;
        this.nazwaDanie='';
      */  this.opisDanie='';
        this.produkty=[];
        
    }
}
export class Produkt{
    nazwaProdukt:String;
    iloscProdukt:number;
}