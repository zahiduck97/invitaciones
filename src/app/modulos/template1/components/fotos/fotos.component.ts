import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss']
})
export class FotosComponent implements OnInit {
  imgArray: string[] = ['alas', 'extra', 'montaña', 'rueda', 'sombrilla'];
  index: number;
  currentSrc: string;
  constructor() {
    this.index= 0;
    this.currentSrc=`assets/${this.imgArray[this.index]}.jpg`;
  }

  ngOnInit(): void {
    setInterval(() => this.delante(), 2900)
  }
  atras () {
    this.index = this.index === 0 ? this.imgArray.length -1 : this.index - 1;
    this.currentSrc = `assets/${this.imgArray[this.index]}.jpg`;
  }
  delante () {
    this.index = this.index >= this.imgArray.length -1 ? 0 : this.index + 1;
    this.currentSrc = `assets/${this.imgArray[this.index]}.jpg`;
  }
}
