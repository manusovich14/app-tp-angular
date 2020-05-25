import { Component, OnInit } from '@angular/core';
import{ Newmensaje } from './../../models/newmensaje';
import{ NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-newpunto1',
  templateUrl: './newpunto1.component.html',
  styleUrls: ['./newpunto1.component.css']
})
export class Newpunto1Component implements OnInit {

  newmensaje: Newmensaje;
  tamMaxTexto: number=20;
  tamTexto: number;

  constructor(public modal:NgbModal) {
    this.newmensaje = new Newmensaje();
  }

  ngOnInit(): void {
  }

  public cambiarTamTexto(){
    this.tamTexto= this.newmensaje.texto.length;
    console.log(this.tamTexto);
  }

  clear(){
    this.newmensaje= new Newmensaje();
  }
}