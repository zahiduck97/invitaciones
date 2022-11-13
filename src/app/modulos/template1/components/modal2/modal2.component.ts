import { Component,   EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.scss']
})
export class Modal2Component implements OnInit {
  @Output() public modal = new EventEmitter<any>();
  @Input() boletos;
  invs
  selected = false;
  numSelected
// falta  detectar si fue escaneado y ahi cambiar 
// en el componente misxv1 el mostrandoModal

  constructor() { }

  ngOnInit(): void {
    this.invs=Array(this.boletos).fill(1).map((x, i) => i + 1);
  }
  selection(number){
    this.selected = true
    this.numSelected = number
  }
  cerrarModal(){
    this.modal.emit(0)
  }
  registerAttendance(){
     // se hace aqui la peticion necesaria con el numSelected
  }
}