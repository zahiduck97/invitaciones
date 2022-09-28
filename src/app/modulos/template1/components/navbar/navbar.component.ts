import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  mostrarMenu = false;
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
}
