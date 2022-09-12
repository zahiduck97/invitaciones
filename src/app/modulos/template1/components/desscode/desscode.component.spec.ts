import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesscodeComponent } from './desscode.component';

describe('DesscodeComponent', () => {
  let component: DesscodeComponent;
  let fixture: ComponentFixture<DesscodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesscodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
