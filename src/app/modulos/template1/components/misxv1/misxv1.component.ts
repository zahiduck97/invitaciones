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
  @ViewChild("qr") qr: ElementRef;
  @ViewChild("scanner") scanner: ElementRef;
  @ViewChild("contacto") contacto: ElementRef;
  @ViewChild("fin") fin: ElementRef;
  token = this.route.snapshot.params['id'];
  data = {
    alias: 'MIS XV AÑOS',
    nombreInvitado: 'JUAN PÉREZ',
    numeroBoletos: 2,
    mesa: 10,
    idEstadoInvitacion: 2,
    escaneados: 0,
    fechaEvento: '10-04-2025',
    contacto1: 'Zahid Butron',
    numero1: '5526935026',
    contacto2: 'Aracely Juarez',
    numero2: '5517802299',
  };
  audio = new Audio('assets/song.mp3');
  reproduciendo = 0;
  mostrandoModal = 0
  modal= true;

// si quieres vovler a abrir el modal luego de cerrarlo, refresca la pantalla
  constructor(
    private route: ActivatedRoute,
    private invitadosSevice: InvitadosService
  ) {
    // if (this.token) {
    //   this.invitadosSevice.updateVisualizacion(this.token).subscribe(data => {
    //     this.data = jwtDecode<JwtPayload>(data.data);
    //     console.log(this.data);
    //     if(this.route.snapshot.params['qr']) {
    //       this.mostrandoModal = 1
    //     }
    //   });
    // }
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

  cerrarModal() {
    this.modal = false;
    this.reproducir(1);
  }
}
