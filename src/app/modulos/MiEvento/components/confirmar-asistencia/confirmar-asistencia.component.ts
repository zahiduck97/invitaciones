import {Component, EventEmitter, Input, OnInit, Output, HostListener, ElementRef, ViewChild} from '@angular/core';
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
  @ViewChild("cardsContainer") box: ElementRef;
  @HostListener("window:scroll", ['$event'])
  doSomethingOnWindowsScroll(){
    if(this.isInView()) {      
      this.box.nativeElement.style.visibility = 'visible' 
      this.box.nativeElement.style.animation = 'moveInRigth 1s ease-out ' 
    }
    if(this.isNotInView()) {
      this.box.nativeElement.style.animation = '' 
      this.box.nativeElement.style.visibility = 'hidden'
    }
    
  }
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
  isInView(){
    const element = this.box.nativeElement.getBoundingClientRect()
    return (
      element.top < (window.innerHeight || document.documentElement.clientHeight) && element.bottom > 0
    )
  }
  isNotInView(){
    const element = this.box.nativeElement.getBoundingClientRect()
    return (
      (element.top < (window.innerHeight || document.documentElement.clientHeight) && element.bottom < 0) ||
      element.bottom > (window.innerHeight || document.documentElement.clientHeight) && element.top > window.innerHeight/1.7
    )
  }
}
