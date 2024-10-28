import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-modal-bienvenida',
  templateUrl: './modal-bienvenida.component.html',
  styleUrls: ['./modal-bienvenida.component.scss']
})
export class ModalBienvenidaComponent {
  @Output() public modal = new EventEmitter<any>();

  constructor() { }


  cerrarModal() {
    this.modal.emit();
  }

}
