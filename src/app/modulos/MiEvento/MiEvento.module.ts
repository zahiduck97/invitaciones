import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MiEventoRoutingModule} from './MiEvento-routing.module';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RelojFondoComponent} from './components/reloj-fondo/reloj-fondo.component';
import {DatosComponent} from './components/datos/datos.component';
import {DondeCuandoComponent} from './components/donde-cuando/donde-cuando.component';
import {DesscodeComponent} from './components/desscode/desscode.component';
import {FotosComponent} from './components/fotos/fotos.component';
import {PersonasComponent} from './components/personas/personas.component';
import {ConfirmarAsistenciaComponent} from './components/confirmar-asistencia/confirmar-asistencia.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import {FotofinComponent} from './components/fotofin/fotofin.component';
import {PublicidadComponent} from './components/publicidad/publicidad.component';
import {ModalComponent} from './components/modal/modal.component';
import {QrComponent} from './components/qr/qr.component';
// import {ZXingScannerModule} from "@zxing/ngx-scanner";
// import {NgxQRCodeModule} from "@techiediaries/ngx-qrcode";
import {FormsModule} from "@angular/forms";
import {Modal2Component} from './components/modal2/modal2.component';
import {MiEventoComponent} from './mi-evento/mi-evento.component';
import { ModalBienvenidaComponent } from './components/modals/modal-bienvenida/modal-bienvenida.component';
import { FraseComponent } from './components/frase/frase.component';
import {NgxQRCodeModule} from "@techiediaries/ngx-qrcode";
import { ScannerComponent } from './components/scanner/scanner.component';
import { FraseRegaloComponent } from './components/frase-regalo/frase-regalo.component';

// import {NgxScannerQrcodeModule} from "ngx-scanner-qrcode";

@NgModule({

  declarations: [


    NavbarComponent,
    RelojFondoComponent,
    DatosComponent,
    DondeCuandoComponent,
    DesscodeComponent,
    FotosComponent,
    PersonasComponent,
    ConfirmarAsistenciaComponent,
    ContactoComponent,
    FotofinComponent,
    PublicidadComponent,
    ModalComponent,
    QrComponent,
    Modal2Component,
    MiEventoComponent,
    ModalBienvenidaComponent,
    FraseComponent,
    ScannerComponent,
    FraseRegaloComponent
  ],
  imports: [
    CommonModule,
    MiEventoRoutingModule,
    // ZXingScannerModule,
    // NgxQRCodeModule,
    FormsModule,
    NgxQRCodeModule,
    // NgxScannerQrcodeModule,
  ],
})
export class MiEventoModule {
}
