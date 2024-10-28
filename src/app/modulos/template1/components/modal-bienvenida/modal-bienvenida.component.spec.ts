import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBienvenidaComponent } from './modal-bienvenida.component';

describe('ModalBienvenidaComponent', () => {
  let component: ModalBienvenidaComponent;
  let fixture: ComponentFixture<ModalBienvenidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBienvenidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
