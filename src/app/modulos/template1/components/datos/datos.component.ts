import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {
  @Input() nombre;
  @Input() boletos;
  @Input() mesa;

  constructor() { }

  ngOnInit(): void {
    this.boletos = this.boletos > 1 ? `${this.boletos} personas` : `${this.boletos} persona`;
  }

}
