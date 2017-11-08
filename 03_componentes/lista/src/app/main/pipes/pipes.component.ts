import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  sNombre: string;
  nNumber: number;
  nPrecio: number;
  dFecha: Date;
  oLibro: {autor: string; titulo: string};

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pédro García';
    this.nNumber = 20.786;
    this.nPrecio = 150.168;
    this.oLibro = {autor: 'Cervantes', titulo: 'El Quijote'};
    this.dFecha = new Date();
  }

}
