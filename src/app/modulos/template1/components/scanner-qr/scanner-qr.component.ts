import { Component, OnInit } from '@angular/core';
import {BarcodeFormat} from "@zxing/library";

@Component({
  selector: 'app-scanner-qr',
  templateUrl: './scanner-qr.component.html',
  styleUrls: ['./scanner-qr.component.scss']
})
export class ScannerQrComponent implements OnInit {
  allowedFormats = [
    BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
