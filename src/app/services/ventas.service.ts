import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  vector_ventas: Array<Pasaje>;
  constructor() { 
    this.vector_ventas=new Array<Pasaje>();
  }

  listVenta(){
    return this.vector_ventas;
  }

  saveVenta(venta: Pasaje){
    this.vector_ventas.push(venta);
  }
}
