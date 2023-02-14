import {Component, HostListener, ElementRef, ViewChild, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit{
  @ViewChild("cardsContainer") box: ElementRef;
  @Input() contacto1: string;
  @Input() numero1: string;
  @Input() contacto2: string;
  @Input() numero2: string;
  @HostListener("window:scroll", ['$event'])
  doSomethingOnWindowsScroll(){

    if(this.isInView()) {
      this.box.nativeElement.style.visibility = 'visible'
      this.box.nativeElement.style.animation = 'moveInLeft 1s ease-out '
    }
    if(this.isNotInView()) {
      this.box.nativeElement.style.animation = ''
      this.box.nativeElement.style.visibility = 'hidden'
    }

  }
  ngOnInit() {
    console.log(this.contacto1)
    console.log(this.contacto2)
    console.log(this.numero1)
    console.log(this.numero2)
  }
  constructor() {
  }
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

  myFunc(numero) {
    const num = numero == 1 ? this.numero1 : this.numero2;
    const texto = `https://wa.me/${num}`
    console.log(num, texto)
    window.location.href= texto
  }
}
