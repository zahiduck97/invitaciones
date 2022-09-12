import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Template1RoutingModule } from './template1-routing.module';
import { Misxv1Component } from './components/misxv1/misxv1.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RelojFondoComponent } from './components/reloj-fondo/reloj-fondo.component';
import { DatosComponent } from './components/datos/datos.component';
import { DondeCuandoComponent } from './components/donde-cuando/donde-cuando.component';
import { DesscodeComponent } from './components/desscode/desscode.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { PersonasComponent } from './components/personas/personas.component';


@NgModule({
  declarations: [

  
    Misxv1Component,
        NavbarComponent,
        RelojFondoComponent,
        DatosComponent,
        DondeCuandoComponent,
        DesscodeComponent,
        FotosComponent,
        PersonasComponent
  ],
  imports: [
    CommonModule,
    Template1RoutingModule,
  ]
})
export class Template1Module { }
