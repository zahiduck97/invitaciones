import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiEventoComponent } from './mi-evento.component';

describe('MiEventoComponent', () => {
  let component: MiEventoComponent;
  let fixture: ComponentFixture<MiEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
