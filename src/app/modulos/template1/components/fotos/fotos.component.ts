import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss']
})
export class FotosComponent implements OnInit {
  @ViewChild("imgn") box: ElementRef;
  imgArray: string[] = ['rellenoboda','tamaño', 'rellenoboda', 'tamaño', 'rellenoboda'];
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
    this.box.nativeElement.style.opacity = '0.3'
    // this.box.nativeElement.style.transition = 'all 0.2s ease-in-out'
    setTimeout(() => {
      this.index = this.index >= this.imgArray.length -1 ? 0 : this.index + 1;
    this.currentSrc = `assets/${this.imgArray[this.index]}.jpg`;
    }, 130);
    setTimeout(() => {
      this.box.nativeElement.style.opacity = '0.6'
    }, 300);
    setTimeout(() => {
      this.box.nativeElement.style.opacity = '1'
    }, 400);
  }
}
