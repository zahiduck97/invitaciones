import {Component, OnInit, ElementRef, ViewChild, Input} from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss']
})
export class FotosComponent implements OnInit {
  @ViewChild("imgn") box: ElementRef;
  @Input() fin: number;
  @Input() extension: string;
  imgArray: string[] = [];
  index: number = 0;
  currentSrc: string;
  constructor() {
  }

  ngOnInit(): void {
    // creando arreglo de imagenes dinámico
    for (let i = 1; i <= this.fin; i++) {
      this.imgArray.push(`foto${i}`)
      console.log(this.imgArray, "array")
    }
    console.log(this.imgArray)

    this.currentSrc = `assets/${this.imgArray[0]}.${this.extension}`;
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
