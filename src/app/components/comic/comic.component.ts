import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comic } from 'src/app/models/Comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent {
  @Input() comic!:Comic;
  @Output() seleccionarComicFavorito:EventEmitter<any> = new EventEmitter();
  @Output() eliminarComic:EventEmitter<any> = new EventEmitter();

  marcarFavorito():void{
    this.seleccionarComicFavorito.emit(this.comic);
  }

  eliminarComicHijo():void{
    this.eliminarComic.emit(this.comic);
  }
}
