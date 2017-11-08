import { User, UserModel } from './../../models/users';
import { Departaments } from './../../models/departaments';
import { Component, ViewChild, OnInit } from '@angular/core';
import { Printer, PrintersModel  } from '../../models/printers';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  sName: string;
  // Declaramos impresora
  aPrinters: Array<Printer>;
  impresoraSeleccionada: Printer;
  isColor: boolean;
  isClaro: boolean;
  // Declaramos los departamentos
  aDepartaments: Array<Departaments>;
  departamentoSeleccionado: Departaments;
  // Declaramos los usuarios
  user: UserModel;

  // Validación
  @ViewChild('formulario') formulario: any;

  mostrarFinal: boolean;

  constructor() { }

  ngOnInit() {
      this.aPrinters = [
        new PrintersModel (1, 'HP', 'Tinta'),
        new PrintersModel (2, 'Brother', 'laser'),
        {id: 3, modelo: 'Xerox', tipo: 'Laser'}
      ];
      this.aDepartaments = [
        new Departaments (1, 'Departamento número 1'),
        new Departaments (2, 'Departamento número 2'),
        new Departaments (2, 'Departamento número 3')
      ];

      this.user = new UserModel ('', '', '', '');

      this.mostrarFinal = true;
      console.log(this.formulario);
      console.log('Prueba');
  }

  enviarFormulario() {
    this.mostrarFinal = true;
  }

  avisarDepartamento(){
    console.log('Avisar departamento');
  }

  avisarPrint(){
    console.log('avisar print');
  }

  borrarFormulario() {
    console.log('borrar');
    this.formulario.reset();
  }

}
