import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from '@angular/core';
import { ListaproductosComponent } from "./components/listaproductos/listaproductos.component";
import { DetalleproductoComponent } from "./components/detalleproducto/detalleproducto.component";
import { HomeComponent } from "./components/home/home.component";
import { PadrecochesComponent } from "./components/padrecoches/padrecoches.component";

const appRoutes: Routes = [
    {
        path:"", component: HomeComponent
    },
    {
        path:"listadoproductos", component: ListaproductosComponent
    },
    {
        path:"detalleproducto/:nombre/:imagen/:precio", component: DetalleproductoComponent
    },
    {
        path:"padrecoches", component: PadrecochesComponent
    }
]

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

