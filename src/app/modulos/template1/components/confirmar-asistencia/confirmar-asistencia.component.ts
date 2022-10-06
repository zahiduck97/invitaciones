import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { InvitadosService } from '../../../../services/invitados.service';
import jwtDecode, {JwtPayload} from "jwt-decode";

@Component({
  selector: 'app-confirmar-asistencia',
  templateUrl: './confirmar-asistencia.component.html',
  styleUrls: ['./confirmar-asistencia.component.scss']
})
export class ConfirmarAsistenciaComponent implements OnInit {
  @Input() token;
  @Input() edoInvitacion;
  @Output() estadoAsistencia = new EventEmitter();
  estado;
  // edoInvitacion = 5;
  constructor(private invitadosSevice: InvitadosService) {
   }

  ngOnInit(): void {

  }
  asistencia(idEstadoInvitacion){
    console.log(idEstadoInvitacion);

    this.invitadosSevice.update(this.token, {idEstadoInvitacion}).subscribe({
      next: () => {
        this.estadoAsistencia.emit(idEstadoInvitacion);
        console.log('Se actualizó el estado')
      },
      error: () => {
        console.log('Ay no :c');
      },
    });
  }
}
