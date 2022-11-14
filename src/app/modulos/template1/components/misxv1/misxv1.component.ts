import {Component, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import jwtDecode, {JwtPayload} from "jwt-decode";
import {InvitadosService} from "../../../../services/invitados.service";

@Component({
  selector: 'app-misxv1',
  templateUrl: './misxv1.component.html',
  styleUrls: ['./misxv1.component.scss']
})
export class Misxv1Component {
  @ViewChild("inicio") inicio: ElementRef;
  @ViewChild("datos") datos: ElementRef;
  @ViewChild("lugar") lugar: ElementRef;
  @ViewChild("fotos") fotos: ElementRef;
  @ViewChild("personas") personas: ElementRef;
  @ViewChild("asistencia") asistencia: ElementRef;
  @ViewChild("contacto") contacto: ElementRef;
  @ViewChild("fin") fin: ElementRef;
  token = this.route.snapshot.params['id'];
  data;
  audio = new Audio('assets/song.mp3');
  reproduciendo = 0;
  mostrandoModal = 1

// si quieres vovler a abrir el modal luego de cerrarlo, refresca la pantalla
  constructor(
    private route: ActivatedRoute,
    private invitadosSevice: InvitadosService
  ) {
    if (this.token) {
      this.invitadosSevice.updateVisualizacion(this.token).subscribe(data => {
        this.data = jwtDecode<JwtPayload>(data.data);
        console.log(this.data);

      });
    }
    this.audio.onended = () => {
      this.reproducir(0)
    };
    this.reproducir(1);
  }

  opcion(opcion) {
    this[opcion.valor].nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
  }

  nuevoEstado(event) {
    this.data.idEstadoInvitacion = event;
  }

  reproducir(valor) {
    valor == 1 ? this.audio.play() : this.audio.pause();
    this.reproduciendo = valor;
  }

  mostrarModal(valor) {
    this.mostrandoModal = valor;
  }
}
