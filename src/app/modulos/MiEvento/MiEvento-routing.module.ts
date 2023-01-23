import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MiEventoComponent} from "./mi-evento/mi-evento.component";

const routes: Routes = [
  {
    path: ':id',
    component: MiEventoComponent
  },
  {
    path: '',
    component: MiEventoComponent
  },
  {
    path: ':id/:qr',
    component: MiEventoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiEventoRoutingModule { }
