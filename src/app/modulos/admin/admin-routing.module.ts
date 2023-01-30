import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReporteAsistenciaComponent} from "./reporte-asistencia/reporte-asistencia.component";

const routes: Routes = [
  {path: '', component: ReporteAsistenciaComponent},
  {path: 'reporte', component: ReporteAsistenciaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
