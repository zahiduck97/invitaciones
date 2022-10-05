import {AfterViewInit, Component, OnInit} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-donde-cuando',
  templateUrl: './donde-cuando.component.html',
  styleUrls: ['./donde-cuando.component.scss']
})
export class DondeCuandoComponent implements AfterViewInit {
  opcion = 0;
  constructor() { }

  ngAfterViewInit(): void {
    // const elements = $('.modal-overlay, .modal');

    // $('.botonMapa').click(function(){
    //   elements.addClass('active');
    // });

    // $('.close-modal').click(function(){
    //   elements.removeClass('active');
    // });
  }
  mostrarModal(valor){
    this.opcion = valor;
  }

}
