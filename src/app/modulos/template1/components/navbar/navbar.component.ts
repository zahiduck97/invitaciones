import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit, OnInit{
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
    {titulo: 'FIN', valor: "fin"},
  ]
  ngOnInit() {
    const datos = this.alias.split(' ');
    this.alias = `${datos[0]}    ${datos[1]}`
  }

  constructor() {
  }

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
