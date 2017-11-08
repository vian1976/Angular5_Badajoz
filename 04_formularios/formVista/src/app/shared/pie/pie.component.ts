import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  sAutor: string;
  sLugar: string;

  constructor() { }

  ngOnInit() {
    this.sAutor = 'Angel Villa Brasero';
    this.sLugar = 'Badajoz';
  }

}
