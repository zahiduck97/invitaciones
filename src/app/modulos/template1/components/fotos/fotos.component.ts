import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss']
})
export class FotosComponent implements OnInit {
  imgArray: string[] = ['rueda','alas', 'extra', 'montaña', 'sombrilla'];
  index: number;
  currentSrc: string;
  constructor() {
    this.index= 0;
    this.currentSrc=`assets/${this.imgArray[this.index]}.jpg`;
  }

  ngOnInit(): void {
    setInterval(() => this.delante(), 4000)
  }
  delante () {
    this.index = this.index >= this.imgArray.length -1 ? 0 : this.index + 1;
    this.currentSrc = `assets/${this.imgArray[this.index]}.jpg`;
  }
}
