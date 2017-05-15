export class Request {
    nazwaTyp: String;
    cena: String;
    produkty: String[];

    
    constructor(){
        this.nazwaTyp='';
        this.cena='';
        this.produkty=[];
    }
    setNazwaTyp(nt:String){
        this.nazwaTyp=nt;
    }
    setCena(c:String){
        this.cena=c;
    }
    setProdukty(pr:String[]){
        this.produkty=pr;
    }
}
