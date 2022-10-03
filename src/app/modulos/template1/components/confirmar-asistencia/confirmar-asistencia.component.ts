import { Component, Input, OnInit } from '@angular/core';
import { InvitadosService } from '../../../../services/invitados.service';

@Component({
  selector: 'app-confirmar-asistencia',
  templateUrl: './confirmar-asistencia.component.html',
  styleUrls: ['./confirmar-asistencia.component.scss']
})
export class ConfirmarAsistenciaComponent implements OnInit {
  @Input() token;
  estadoLocal = 1;
  constructor(private invitadosSevice: InvitadosService) { }

  ngOnInit(): void {
    console.log('k-----------',this.estadoLocal);
    
  }
  asistencia(estadoInvitacion){
    console.log(estadoInvitacion);
    console.log(this.estadoLocal);
    
    this.invitadosSevice.update(this.token, {estadoInvitacion}).subscribe({
      complete: () => this.estadoLocal = estadoInvitacion
    })
  } 
}
