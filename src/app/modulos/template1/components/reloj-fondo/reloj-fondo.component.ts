import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-reloj-fondo',
  templateUrl: './reloj-fondo.component.html',
  styleUrls: ['./reloj-fondo.component.scss']
})
export class RelojFondoComponent implements OnInit {
  segs;
  diasEvento;
  horasEvento;
  minutosEvento;
  segundosEvento;
  fechaEvento;
  fechaHoy;
  inte;
  constructor() {
    this.fechaHoy = new Date();
    this.fechaEvento = new Date('November 19, 2022 17:00:00');
    this.segundosEvento  = Math.abs(this.fechaEvento - this.fechaHoy) / 1000;
    this.diasEvento = Math.floor(this.segundosEvento / 86400);
    this.segundosEvento -= this.diasEvento  * 86400;
    this.horasEvento = Math.floor(this.segundosEvento / 3600) % 24;
    this.segundosEvento -= this.horasEvento * 3600;
    this.minutosEvento = Math.floor(this.segundosEvento / 60) % 60;
    this.segundosEvento -= this.minutosEvento * 60;
    this.segs = Math.floor(this.segundosEvento % 60);
  }

  ngOnInit(): void {
    console.log(this.fechaEvento);
    console.log(this.segundosEvento);
    console.log(this.diasEvento);
    console.log(this.horasEvento);
    console.log(this.minutosEvento);
    console.log(this.segs);
    // this.minutosEvento = 1
    // this.horasEvento = 2
    this. inte = setInterval(() => this.retroceso(), 1000)
  }
  retroceso(){

    if (this.segs === 0){
      this.segs = 59;
      if (this.minutosEvento === 0){
        this.minutosEvento = 59;
        if ( this.horasEvento === 0){
          this.horasEvento = 23;
          if (this.diasEvento === 0){
            clearInterval(this.inte)
          } else{
            this.diasEvento -= 1;
          }
        } else {
          this.horasEvento -= 1;
        }
      } else {
        this.minutosEvento -= 1;
      }
    } else
      this.segs -= 1
  }

}
