import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReporteAsistenciaComponent } from './reporte-asistencia/reporte-asistencia.component';


@NgModule({
  declarations: [
    ReporteAsistenciaComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
