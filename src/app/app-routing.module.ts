import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MiEventoModule} from "./modulos/MiEvento/MiEvento.module";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full'
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./modulos/landing/landing.module').then(m => m.LandingModule),
  // },
  {
    path: 'admin',
    loadChildren: () => import('./modulos/admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'miEvento',
    loadChildren: () => import('./modulos/MiEvento/MiEvento.module').then(m => m.MiEventoModule),
  },
  {path: '**', redirectTo:'' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

