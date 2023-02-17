import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

  constructor(
    // public stream: MediaStream,
  ) { }

  ngOnInit(): void {
  }

  // async startCamera() {
  //   try {
  //     this.stream = await navigator.mediaDevices.getUserMedia({ video: true });
  //   } catch (err) {
  //     console.log("Error al obtener acceso a la cámara", err);
  //   }
  // }
  // stopCamera() {
  //   this.stream.getTracks().forEach(track => track.stop());
  // }

}
