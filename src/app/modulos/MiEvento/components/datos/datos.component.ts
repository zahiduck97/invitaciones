import {Component, Input, OnInit, HostListener, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {
  @Input() nombre;
  @Input() boletos;
  @Input() mesa;
  @ViewChild("boxText") box: ElementRef;
  @HostListener("window:scroll", ['$event'])
  doSomethingOnWindowsScroll(){
    
    
    if(this.isInView()) {
      this.box.nativeElement.style.visibility = 'visible' 
      this.box.nativeElement.style.animation = 'moveInRigth 1s ease-out '  
    }
    if(this.isNotInView()) {
      this.box.nativeElement.style.visibility = 'hidden'
      this.box.nativeElement.style.animation = '' 
    }
    
  }
  constructor() { }

  ngOnInit(): void {
    this.boletos = this.boletos > 1 ? `${this.boletos} personas` : `${this.boletos} persona`;
  }
  isInView(){
    const element = this.box.nativeElement.getBoundingClientRect()
    return (
      element.top < (window.innerHeight || document.documentElement.clientHeight) && element.bottom > element.top
    )
  }
  isNotInView(){
    const element = this.box.nativeElement.getBoundingClientRect()
    return (
      (element.top < (window.innerHeight || document.documentElement.clientHeight) && element.bottom < 0) ||
      element.bottom > (window.innerHeight || document.documentElement.clientHeight) && element.top > 0
    )
  }
}
