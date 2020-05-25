import { Component, OnInit } from '@angular/core';
import { Pasaje } from 'src/app/models/pasaje';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  venta: Pasaje;
  vector_ventas: Array<Pasaje>;
  precio_descuento:number=0;
  precio_actual:number=0;
  mostrar:boolean=false;

  constructor(private ventaservice: VentasService) { 
    this.venta= new Pasaje();
    this.vector_ventas= new Array<Pasaje>();
    this.listVenta();
  }

  ngOnInit(): void {
  }

  public saveVenta(){
    this.venta.fechacompra= new Date();
    //llamar al metodo web service
    this.ventaservice.saveVenta(this.venta)
    this.mostrar=false;
    this.precio_actual=0;
    this.precio_descuento=0;
  }

  public listVenta(){
    //llamar al metodo de webservice
    this.vector_ventas=this.ventaservice.listVenta();
   }

  public limpiarVenta(){
    this.venta= new Pasaje();
  }

  public calcularDescuento(){
    if(this.venta.categoriapasajero=='m'){
      this.precio_descuento=(this.venta.precio*25)/100;
      this.precio_actual=this.venta.precio-this.precio_descuento;
      this.mostrar=true;
    }
    if(this.venta.categoriapasajero=='j'){
      this.precio_descuento=(this.venta.precio*50)/100;
      this.precio_actual=this.venta.precio-this.precio_descuento;
      this.mostrar=true;
    }
  }
}
