import { LibrosService } from './../../servicios/libros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  aLibros: Array<string>; // Lista de ideas que se almacena en array
  sLibro: string; // Variable

  constructor(
    public slLibros: LibrosService
  ) { }

  ngOnInit() {
    // Inicializamos el array
    this.aLibros = [];
  }

  // Metodo para buscar
  buscar() {
    slLibros.
  }

}
