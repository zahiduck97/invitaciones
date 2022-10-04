import {AfterViewInit, Component, OnInit} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-donde-cuando',
  templateUrl: './donde-cuando.component.html',
  styleUrls: ['./donde-cuando.component.scss']
})
export class DondeCuandoComponent implements AfterViewInit {
  isModal = false;
  constructor() { }

  ngAfterViewInit(): void {
    // const elements = $('.modal-overlay, .modal');

    // $('.botonMapa').click(function(){
    //   elements.addClass('active');
    // });

    // $('.close-modal').click(function(){
    //   elements.removeClass('active');
    // });
  }
  mostrarModal(event?){
    console.log('papa');
    
    this.isModal = this.isModal ? false : true;
    console.log(this.isModal);
    
  }

}
