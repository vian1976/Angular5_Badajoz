import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  sNombre: string;
  nNumber: number;
  isSpanish: boolean;

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pedro García';
  }

  btnBorrar() {
    this.sNombre = '';
    this.nNumber = 22;
    this.isSpanish = false;
  }

}
