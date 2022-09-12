import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Misxv1Component} from "./components/misxv1/misxv1.component";

const routes: Routes = [
  {
    path: '',
    component: Misxv1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Template1RoutingModule { }
