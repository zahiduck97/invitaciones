import { Component, OnInit , HostListener, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-fotofin',
  templateUrl: './fotofin.component.html',
  styleUrls: ['./fotofin.component.scss']
})
export class FotofinComponent implements OnInit {
  @ViewChild("cardsContainer") box: ElementRef;
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
  constructor() { }

  ngOnInit(): void {
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
