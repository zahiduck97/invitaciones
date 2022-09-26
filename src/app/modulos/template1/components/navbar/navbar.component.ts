import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  mostrarMenu = false;
  constructor() { }

  ngOnInit(): void {
  }
  menu () {
    this.mostrarMenu = this.mostrarMenu ? false : true;
  }
}
