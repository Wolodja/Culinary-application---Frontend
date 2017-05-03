export class Request {
    typDania: String;
    budzet: number;
    skladniki: String[];

    constructor(t:String, b:number, s:String[]){
        this.typDania=t;
        this.budzet=b;
        this.skladniki=s;
    }
}
