import { Component, Input } from '@angular/core';
import { Coche } from 'src/app/models/Coche';

@Component({
  selector: 'app-hijocoche',
  templateUrl: './hijocoche.component.html',
  styleUrls: ['./hijocoche.component.css']
})
export class HijococheComponent {
  @Input() coche!:Coche;
  public mensaje!:string;
  constructor(){
    //Cuando recibimos elementos input no podemos utilizarlos dentro del constructor
  }
  //Tendremos un metodo que devolvera TRUE o FALSE si el coche esta apagado o encendido
  comprobarEstado():boolean{
    if(this.coche.state===false){
      this.mensaje = "El coche esta apagado";
      this.coche.velocidad = 0
      return false
    }else{
      this.mensaje = "El coche esta encendido";
      return true;
    }
  }

  //Tendremos un metodo para encender el coche
  encenderCoche():void{
    this.coche.state = !this.coche.state;
    this.comprobarEstado();
  }

  //Tendremos un metodo para acelerar el coche
  acelerarCoche():void{
    if(this.comprobarEstado() === false){
      alert("¿Donde vas?, el coche esta apagado");
    }else{
      this.coche.velocidad = this.coche.velocidad + this.coche.aceleracion;
    }
  }
}
