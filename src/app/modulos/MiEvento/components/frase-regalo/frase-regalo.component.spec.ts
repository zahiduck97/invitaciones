import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraseRegaloComponent } from './frase-regalo.component';

describe('FraseRegaloComponent', () => {
  let component: FraseRegaloComponent;
  let fixture: ComponentFixture<FraseRegaloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FraseRegaloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FraseRegaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
