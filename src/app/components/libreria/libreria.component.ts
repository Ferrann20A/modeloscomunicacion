import { Component, ViewChild, ElementRef } from '@angular/core';
import { Comic } from 'src/app/models/Comic';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent {
  public comics:Array<Comic>;
  public comicFavorito!:Comic;
  public nuevoComic!:Comic;
  @ViewChild("tituloComic") tituloRef!:ElementRef;
  @ViewChild("imagenComic") imagenRef!:ElementRef;
  @ViewChild("nombreComic") nombreRef!:ElementRef;

  modificarComic(event:number):void{
    let titulo = this.tituloRef.nativeElement.value;
    let imagen = this.imagenRef.nativeElement.value;
    let nombre = this.nombreRef.nativeElement.value;
    this.comics[event] = new Comic(titulo,imagen,nombre);
  }

  seleccionarComicFavorito(event:any):void{
    this.comicFavorito = event;
  }

  eliminarComic(event:any):void{
    let index = this.comics.indexOf(event);
    if(index != -1){
      this.comics.splice(index,1);
    }
  }

  insertarComic():void{
    let titulo = this.tituloRef.nativeElement.value;
    let imagen = this.imagenRef.nativeElement.value;
    let nombre = this.nombreRef.nativeElement.value;
    this.nuevoComic = new Comic(titulo,imagen,nombre);
    this.comics.push(this.nuevoComic);
  }

  constructor(){
    this.comics = [
      new Comic(
        "Spiderman",
        "https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg",
        "Hombre araña"
      ),
      new Comic(
        "Wolverine",
        "https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg",
        "Lobezno"
      ),
      new Comic(
        "Guardianes de la Galaxia",
        "https://i.blogs.es/cebdf3/screenshot_1859/original.webp",
        "Yo soy Groot"
      ),
      new Comic(
      "Avengers",
      "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
      "Los Vengadores"
      ),
      new Comic(
      "Spawn",
      "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
      "Todd MacFarlane"
      )
    ];
  }
}
