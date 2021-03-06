import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista4',
  templateUrl: './lista4.component.html',
  styleUrls: ['./lista4.component.css']
})
export class Lista4Component implements OnInit {

  aIdeas: Array<string>; // Lista de ideas que se almacena en array
  sIdea: string; // Variable

  constructor() { }

  ngOnInit() {
    // Inicializamos el array
    this.aIdeas = [];
  }

  // Metodo para añadir
  addIdeas() {
    // Tenemos que inicialiar antes el array, con angular no se pasan parámetros
    this.aIdeas.push(this.sIdea);
    this.sIdea = '';
  }

}
