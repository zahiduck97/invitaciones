import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotofinComponent } from './fotofin.component';

describe('FotofinComponent', () => {
  let component: FotofinComponent;
  let fixture: ComponentFixture<FotofinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotofinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotofinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
