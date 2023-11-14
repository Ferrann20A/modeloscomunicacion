import { Component } from '@angular/core';

@Component({
  selector: 'app-padredeportes',
  templateUrl: './padredeportes.component.html',
  styleUrls: ['./padredeportes.component.css']
})
export class PadredeportesComponent {
  public deportes:Array<string>;
  public mensaje!:string;

  //Tendremos un metodo para recibir datos desde el hijo
  seleccionarFavoritoPadre(event:any):void{
    // console.log(event);
    this.mensaje = "Has seleccionado " + event.toUpperCase() + " como favorito";
  }

  constructor(){
    this.deportes = ["Futbol","Padel","Baloncesto","Tenis","Curling","Balonmano"];
  }
}
