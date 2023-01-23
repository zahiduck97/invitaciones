import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelojFondoComponent } from './reloj-fondo.component';

describe('RelojFondoComponent', () => {
  let component: RelojFondoComponent;
  let fixture: ComponentFixture<RelojFondoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelojFondoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelojFondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
