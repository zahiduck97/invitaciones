import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal-bienvenida',
  templateUrl: './modal-bienvenida.component.html',
  styleUrls: ['./modal-bienvenida.component.scss']
})
export class ModalBienvenidaComponent implements OnInit {
  @Output() public modal = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  cerrarModal() {
    this.modal.emit();
  }

}
