export class Negociacao {
     constructor( 
          private _data :Date, 
          public readonly quantidade: number,
          public readonly valor: number
     ){}

     get data(): Date{
          const data = new Date(this._data.getTime());
          return data;
     }

     get Volume(): number{
          return this.quantidade * this.valor;
     }
}