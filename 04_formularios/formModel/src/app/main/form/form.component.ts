import { Component, OnInit } from '@angular/core';
import { User, UserModel } from './../../models/users';
import { Departaments } from './../../models/departaments';
import { Printer, PrintersModel  } from '../../models/printers';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  aPrinters: Array<Printer>;
  aDepartaments: Array<Departaments>;
  mostrarFinal: boolean;

  formulario: FormGroup;

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

      // Creamos vriable con el formGroup con los controles, no se tienen que llamar igual ya que se deben enlazar
      // desde el html con los atributos formGroup y formControlName

      this.formulario = new FormGroup({
        nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
        apellidos: new FormControl('', Validators.required),
        telefono: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}$')]),
        impresora: new FormControl(),
        color: new FormControl(),
        tono: new FormControl(),
        departamento: new FormControl()
      });

      this.mostrarFinal = true;

  }

  enviarFormulario() {
    this.mostrarFinal = true;
  }

  avisarDepartamento() {
    console.log('Avisar departamento');
  }
  
  avisarPrint() {
    console.log('avisar print');
  }

  borrarFormulario() {
    console.log('borrar');
  
  }

}
