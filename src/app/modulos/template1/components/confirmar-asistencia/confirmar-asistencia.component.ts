import { Component, Input, OnInit } from '@angular/core';
import { InvitadosService } from '../../../../services/invitados.service';

@Component({
  selector: 'app-confirmar-asistencia',
  templateUrl: './confirmar-asistencia.component.html',
  styleUrls: ['./confirmar-asistencia.component.scss']
})
export class ConfirmarAsistenciaComponent implements OnInit {
  @Input() token;
  @Input() edoInvitacion;
  // edoInvitacion = 5;
  constructor(private invitadosSevice: InvitadosService) {
   }

  ngOnInit(): void {
    
  }
  asistencia(estadoInvitacion){
    console.log(estadoInvitacion);
    
    this.invitadosSevice.update(this.token, {estadoInvitacion})
    // .subscribe({
    //   complete: () => this.estadoLocal = estadoInvitacion
    // })
  } 
}
