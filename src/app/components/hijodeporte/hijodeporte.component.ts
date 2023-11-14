import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijodeporte',
  templateUrl: './hijodeporte.component.html',
  styleUrls: ['./hijodeporte.component.css']
})
export class HijodeporteComponent {
  @Input() deporte!:string;
  //Debemos declarar el meotodo que recibimos desde el parent
  @Output() seleccionarFavoritoPadre:EventEmitter<any> = new EventEmitter();

  //Creamos un metodo en el componente hijo para poder realizar la llamda
  //en el component padre
  seleccionarFavoritoHijo():void{
    //Este metodo llamara al padre
    this.seleccionarFavoritoPadre.emit(this.deporte);
  }
}
