import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Misxv1Component } from './misxv1.component';

describe('Misxv1Component', () => {
  let component: Misxv1Component;
  let fixture: ComponentFixture<Misxv1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Misxv1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Misxv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
