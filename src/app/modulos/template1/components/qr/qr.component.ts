import {Component, Input, OnInit} from '@angular/core';
import {NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from "@techiediaries/ngx-qrcode";
import {ActivatedRoute} from "@angular/router";
import jwtDecode, {JwtPayload} from "jwt-decode";
import {InvitadosService} from "../../../../services/invitados.service";

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss']
})

export class QrComponent implements OnInit {
  @Input() token
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value;
  data;

  constructor(
    private route: ActivatedRoute,
    private invitadosSevice: InvitadosService,
  ) { }

  ngOnInit(): void {
    if( this.token) {
      this.invitadosSevice.updateVisualizacion(this.token).subscribe(data => {
        this.data = jwtDecode<JwtPayload>(data.data);
        this.value = `http://invitaciones-test.s3-website-us-east-1.amazonaws.com/#/misxv1/${this.token}/1`
      });
    }
  }
}
