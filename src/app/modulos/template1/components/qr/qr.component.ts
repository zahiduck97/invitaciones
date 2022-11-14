import {Component, Input, OnInit} from '@angular/core';
import {NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from "@techiediaries/ngx-qrcode";
import {ActivatedRoute} from "@angular/router";
import jwtDecode, {JwtPayload} from "jwt-decode";
import {InvitadosService} from "../../../../services/invitados.service";
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss']
})

export class QrComponent implements OnInit, PipeTransform {
  @Input() token
  @Pipe({
    name: 'shortUrl'
  })
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
        this.value = `http://invitaciones-test.s3-website-us-east-1.amazonaws.com/#/misxv1/${this.token}`
        this.transform(this.value)
      });
    }
  }
  transform(url: string, args?: any): any {
    console.log(url)
    if (url) {
      const len = url.length;
      if (len > 30) // only shorten if greater than 30
        // change value 21 and 9 as per requirement
        return url.substring(0, 21) + '...' + url.substring(len - 9, len);
      console.log(url)
      return url;
    }
    return url;
  }
}
