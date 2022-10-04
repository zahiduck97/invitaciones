import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() public modal = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  cerrarModal(){
    console.log('d');
    
    this.modal.emit()
  }
}
