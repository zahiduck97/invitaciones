import {AfterViewInit, Component, OnInit} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-donde-cuando',
  templateUrl: './donde-cuando.component.html',
  styleUrls: ['./donde-cuando.component.scss']
})
export class DondeCuandoComponent {
  opcion = 0;
  constructor() { }

  mostrarModal(valor){
    this.opcion = valor;
  }

}
