import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modulos/landing/landing.module').then(m => m.LandingModule),
  },
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
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

