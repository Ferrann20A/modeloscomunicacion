export class Coche{
    constructor(
        public modelo:string,
        public marca:string,
        public velocidad:number,
        public aceleracion:number,
        public state:boolean
    ){}
}