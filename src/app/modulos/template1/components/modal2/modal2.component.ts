import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InvitadosService} from "../../../../services/invitados.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.scss']
})
export class Modal2Component implements OnInit {
  @Output() public modal = new EventEmitter<any>();
  @Input() totales;
  @Input() escaneados;
  invs
  numSelected
// falta  detectar si fue escaneado y ahi cambiar
// en el componente misxv1 el mostrandoModal

  constructor(
    private invitadosService: InvitadosService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.invs = Array(this.totales-this.escaneados).fill(1).map((x, i) => i + 1);
  }

  selection(number) {
    this.numSelected = number
  }

  cerrarModal() {
    this.modal.emit(0)
  }

  registerAttendance() {
    this.invitadosService.updateEscaneados(this.route.snapshot.params['id'], {escaneados: this.numSelected})
      .subscribe(() => this.cerrarModal())
  }
}
