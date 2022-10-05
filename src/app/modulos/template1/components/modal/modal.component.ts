import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() public modal = new EventEmitter<any>();
  @Input() valor;
  constructor() { }

  ngOnInit(): void {
  }
  cerrarModal(){
    this.modal.emit(0)
  }
}
