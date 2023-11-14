import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Producto } from 'src/app/models/Producto';

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.css']
})
export class DetalleproductoComponent implements OnInit{
  public producto!:Producto;
  constructor(private _activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this._activatedRoute.params.subscribe((parametros:Params)=>{
      let nombre = parametros["nombre"];
      let imagen = parametros["imagen"];
      let precio = parametros["precio"];
      this.producto = new Producto(nombre, imagen, parseInt(precio));
    })
  }
}
