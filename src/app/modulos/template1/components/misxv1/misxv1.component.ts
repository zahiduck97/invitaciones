import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import jwtDecode, {JwtPayload} from "jwt-decode";
import {InvitadosService} from "../../../../services/invitados.service";

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
  token = this.route.snapshot.params['id'];
  data;

  constructor(
    private route: ActivatedRoute,
    private invitadosSevice: InvitadosService
  ) {
    if( this.token) {
      this.invitadosSevice.updateVisualizacion(this.token).subscribe(data => {
        this.data = jwtDecode<JwtPayload>(data.data);
      });
    }
  }

  opcion(opcion) {
    this[opcion.valor].nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }

}
