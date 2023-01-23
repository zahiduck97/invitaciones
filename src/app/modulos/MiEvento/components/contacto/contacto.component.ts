import { Component, OnInit , HostListener, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  @ViewChild("cardsContainer") box: ElementRef;
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
  constructor() { }

  ngOnInit(): void {
  }

  copiarTelefono(valor){
    const telefono = valor ? "5565197800" : "5526935026";
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = telefono;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    alert('¡Número copiado al portapapeles!');
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
