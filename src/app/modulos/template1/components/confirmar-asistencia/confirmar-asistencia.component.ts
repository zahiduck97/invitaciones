import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { InvitadosService } from '../../../../services/invitados.service';

@Component({
  selector: 'app-confirmar-asistencia',
  templateUrl: './confirmar-asistencia.component.html',
  styleUrls: ['./confirmar-asistencia.component.scss']
})
export class ConfirmarAsistenciaComponent implements OnInit {
  @Input() token;
  @Input() edoInvitacion;
  @Output() estadoAsistencia = new EventEmitter();
  constructor(private invitadosSevice: InvitadosService) {
   }

  ngOnInit(): void {

  }
  asistencia(idEstadoInvitacion){
    this.invitadosSevice.update(this.token, {idEstadoInvitacion}).subscribe({
      next: () => {
        this.estadoAsistencia.emit(idEstadoInvitacion);
      },
    });
  }
}
