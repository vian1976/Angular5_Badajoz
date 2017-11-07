import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.css']
})
export class CabezaComponent implements OnInit {
  // La interfaz OnInit se declara el metodo ngOnInit, función que se ejecuta en la carga, permitirá la inicialización

  public sTitulo: string;


  // El contructor solamente para la injección de dependencias
  constructor() { }


  ngOnInit() {
    this.sTitulo = 'Uso de modulos';
  }

}
