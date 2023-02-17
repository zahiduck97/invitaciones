import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from "@techiediaries/ngx-qrcode";

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
  color = '#d0964a'
  backgroundColor = '#ffffff'

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const {id} = this.route.snapshot.params
    console.log(id)
    this.value = `https://blancaysalvador.digitalservicemaz.com/miEvento/${id}`
    // this.value = id
  }
}
