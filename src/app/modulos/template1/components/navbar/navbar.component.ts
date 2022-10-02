import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit{
  mostrarMenu = false;
  @Input() alias;
  @Output() opcion = new EventEmitter();
  arrayMenu= [
    {titulo: 'INICIO', valor: "inicio"},
    {titulo: 'DATOS', valor: "datos"},
    {titulo: 'LUGAR', valor: "lugar"},
    {titulo: 'FOTOS', valor: "fotos"},
    {titulo: 'PERSONAS', valor: "personas"},
    {titulo: 'ASISTENCIA', valor: "asistencia"},
    {titulo: 'CONTACTO', valor: "contacto"},
  ]
  constructor() { }

  menu () {
    this.mostrarMenu = !this.mostrarMenu;
  }

  opcionSeleccionada(valor) {
    this.opcion.emit({valor})
    this.menu();
  }

  ngAfterViewInit(): void {
    /** Make transparent or not when scroll **/
    $(document).ready(function () {
      $(window).scroll(function() {
        if($(document).scrollTop()>50){
          $("nav").addClass("shrink")
          $("h1").addClass("h1-shrink")
        } else {
          $("nav").removeClass("shrink")
          $("h1").removeClass("h1-shrink")
        }
      });

    });
  }
}
