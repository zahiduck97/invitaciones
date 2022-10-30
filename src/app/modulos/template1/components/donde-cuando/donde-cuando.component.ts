import {AfterViewInit, Component, HostListener, ElementRef, ViewChild} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-donde-cuando',
  templateUrl: './donde-cuando.component.html',
  styleUrls: ['./donde-cuando.component.scss']
})
export class DondeCuandoComponent {
  @ViewChild("cardsContainer") box: ElementRef;
  @HostListener("window:scroll", ['$event'])
  doSomethingOnWindowsScroll(){
    console.log('l',this.box.nativeElement.getBoundingClientRect().top);
    console.log('b', this.box.nativeElement.getBoundingClientRect().bottom);
    console.log('w',window.innerHeight);
    console.log('o',document.documentElement.clientHeight);
    
    
    if(this.isInView()) {      
      this.box.nativeElement.style.visibility = 'visible' 
      this.box.nativeElement.style.animation = 'moveInRigth 1s ease-out ' 
    }
    if(this.isNotInView()) {
      this.box.nativeElement.style.animation = '' 
      this.box.nativeElement.style.visibility = 'hidden'
    }
    
  }
  opcion = 0;
  constructor() { }

  mostrarModal(valor){
    this.opcion = valor;
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
}
