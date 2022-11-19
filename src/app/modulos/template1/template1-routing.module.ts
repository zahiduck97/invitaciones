import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Misxv1Component} from "./components/misxv1/misxv1.component";
import {Modal2Component} from "./components/modal2/modal2.component";

const routes: Routes = [
  {
    path: ':id',
    component: Misxv1Component
  },
  {
    path: '',
    component: Misxv1Component
  },
  {
    path: ':id/:qr',
    component: Modal2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Template1RoutingModule { }
