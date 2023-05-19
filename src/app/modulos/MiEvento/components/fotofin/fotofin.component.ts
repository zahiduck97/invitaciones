import {Component, HostListener, ElementRef, ViewChild, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fotofin',
  templateUrl: './fotofin.component.html',
  styleUrls: ['./fotofin.component.scss']
})
export class FotofinComponent implements OnInit{

  @ViewChild("cardsContainer") box: ElementRef;
  @ViewChild("imgn") img: ElementRef;
  @Input() inicio: number;
  @Input() fin: number;
  @Input() extension: string;
  @HostListener("window:scroll", ['$event'])
  doSomethingOnWindowsScroll(){
    if(this.isInView()) {
      this.box.nativeElement.style.visibility = 'visible'
      this.box.nativeElement.style.animation = 'moveInRigth 1s ease-out '
    }
    if(this.isNotInView()) {
      this.box.nativeElement.style.animation = ''
      this.box.nativeElement.style.visibility = 'hidden'
    }

  }
  imgArray: string[] = [];
  index: number = 0;
  currentSrc: string;

  ngOnInit() {
    // creando arreglo de imagenes dinámico
    // for (let i = this.inicio; i <= this.fin; i++) {
    //   this.imgArray.push(`foto${i}`)
    // }
    // console.log(this.imgArray)
    //
    // this.currentSrc = `assets/${this.imgArray[0]}.${this.extension}`;
    // setInterval(() => this.delante(), 4000)

    this.currentSrc = `assets/foto${this.inicio}.${this.extension}`;
  }

  constructor() { }

  isInView(){
    const element = this.box.nativeElement.getBoundingClientRect()
    return (
      element.top < (window.innerHeight || document.documentElement.clientHeight) && element.bottom > 0
    )
  }
  isNotInView(){
    const element = this.box.nativeElement.getBoundingClientRect()
    return (
      (element.top < (window.innerHeight || document.documentElement.clientHeight) && element.bottom < 0) ||
      element.bottom > (window.innerHeight || document.documentElement.clientHeight) && element.top > window.innerHeight/1.7
    )
  }

  delante () {
    this.img.nativeElement.style.opacity = '0.3'
    setTimeout(() => {
      this.index = this.index >= this.imgArray.length -1 ? 0 : this.index + 1;
      this.currentSrc = `assets/${this.imgArray[this.index]}.jpg`;
    }, 130);
    setTimeout(() => {
      this.img.nativeElement.style.opacity = '0.6'
    }, 300);
    setTimeout(() => {
      this.img.nativeElement.style.opacity = '1'
    }, 400);
  }

}
