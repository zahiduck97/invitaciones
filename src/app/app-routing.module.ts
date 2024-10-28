import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MiEventoModule} from "./modulos/MiEvento/MiEvento.module";

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/miEvento',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'admin',
  //   loadChildren: () => import('./modulos/admin/admin.module').then(m => m.AdminModule),
  // },
  {
    path: '',
    loadChildren: () => import('./modulos/MiEvento/MiEvento.module').then(m => m.MiEventoModule),
  },
  {path: '**', redirectTo:'' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

