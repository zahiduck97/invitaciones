import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-misxv1',
  templateUrl: './misxv1.component.html',
  styleUrls: ['./misxv1.component.scss']
})
export class Misxv1Component{
  @ViewChild("inicio") inicio: ElementRef;
  @ViewChild("datos") datos: ElementRef;
  @ViewChild("lugar") lugar: ElementRef;
  @ViewChild("fotos") fotos: ElementRef;
  @ViewChild("personas") personas: ElementRef;
  @ViewChild("asistencia") asistencia: ElementRef;
  @ViewChild("contacto") contacto: ElementRef;

  constructor() { }

  opcion(opcion) {
    this[opcion.valor].nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }

}
