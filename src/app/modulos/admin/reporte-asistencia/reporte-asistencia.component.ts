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

  menus: any[] = [
    // {
    //   name: "Front-end",
    //   active: true,
    //   submenu: [
    //     { name: "HTML", url: "#" },
    //     { name: "CSS", url: "#" },
    //     { name: "Javascript", url: "#" }
    //   ]
    // },
    // {
    //   name: "Responsive web",
    //   active: false,
    //   submenu: [
    //     { name: "Tablets", url: "#" },
    //     { name: "Mobiles", url: "#" },
    //     { name: "Desktop", url: "#" }
    //   ]
    // },
    // {
    //   name: "Web Browser",
    //   active: false,
    //   submenu: [
    //     { name: "Chrome", url: "#" },
    //     { name: "Firefox", url: "#" },
    //     { name: "Desktop", url: "#" }
    //   ]
    // }
  ];

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
}
