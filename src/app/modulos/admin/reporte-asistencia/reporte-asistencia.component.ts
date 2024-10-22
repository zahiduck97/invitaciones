import { Component } from '@angular/core';
import {ReporteService} from "../../../services/reporte.service";

@Component({
  selector: 'app-reporte-asistencia',
  templateUrl: './reporte-asistencia.component.html',
  styleUrls: ['./reporte-asistencia.component.scss']
})
export class ReporteAsistenciaComponent {

  options = { multi: false };
  isLoading = true

  menus: any[] = [];

  constructor(
    private reporteService: ReporteService
  ) {
    this.reporteService.getReporteGeneral().subscribe(data => {
      for(const [index, clave] of Object.keys(data).entries()) {
        this.menus.push({
          name: clave,
          number: data[clave],
          value: index,
          active: false,
          request: false,
          submenu: []
        })
      }
      console.log(this.menus)
      this.isLoading = false;
    })
  }


  toggle(index: number) {
    console.log('entro')
    // Cierra Demas pestañas si no se puede multi
    if (!this.options.multi) {
      this.menus.filter(
        (menu, i) => i !== index && menu.active
      ).forEach(menu => menu.active = !menu.active);
    }
    this.menus[index].active = !this.menus[index].active;

    if(this.menus[index].active && !this.menus[index].request) {
      this.reporteService.getReporteIndividual(index).subscribe(invitados => {
        this.menus[index].submenu = invitados;
        console.log(this.menus[index].submenu)
        this.menus[index].request = true;
      })
    }
  }

  contactame(valor, num) {
    if (valor === 0) {
      const texto = `https://wa.me/${num}`
      window.location.href= texto
    }
  }
}