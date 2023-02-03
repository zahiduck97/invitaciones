import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {InvitadosService} from "../../../services/invitados.service";
import jwtDecode, {JwtPayload} from "jwt-decode";

@Component({
  selector: 'app-mi-evento',
  templateUrl: './mi-evento.component.html',
  styleUrls: ['./mi-evento.component.scss']
})
export class MiEventoComponent {
  @ViewChild("inicio") inicio: ElementRef;
  @ViewChild("datos") datos: ElementRef;
  @ViewChild("lugar") lugar: ElementRef;
  @ViewChild("fotos") fotos: ElementRef;
  @ViewChild("personas") personas: ElementRef;
  @ViewChild("asistencia") asistencia: ElementRef;
  @ViewChild("qr") qr: ElementRef;
  @ViewChild("scanner") scanner: ElementRef;
  @ViewChild("contacto") contacto: ElementRef;
  @ViewChild("fin") fin: ElementRef;
  @ViewChild("frase") frase: ElementRef;
  @ViewChild("fraseRegalo") fraseRegalo: ElementRef;
  token = this.route.snapshot.params['id'];
  data;
  audio = new Audio('assets/song.mp3');
  reproduciendo = 0;
  mostrandoModal = 0
  modal= true;

// si quieres vovler a abrir el modal luego de cerrarlo, refresca la pantalla
  constructor(
    private route: ActivatedRoute,
    private invitadosSevice: InvitadosService
  ) {
    if (this.token) {
      this.invitadosSevice.updateVisualizacion(this.token).subscribe(data => {
        this.data = jwtDecode<JwtPayload>(data.data);
        console.log(this.data);
        if(this.route.snapshot.params['qr']) {
          this.mostrandoModal = 1
        }
      });
    }
    this.audio.onended = () => {
      this.reproducir(0)
    };
  }

  opcion(opcion) {
    this[opcion.valor].nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
  }

  cerrarModal() {
    this.modal = false;
    this.reproducir(1);
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
