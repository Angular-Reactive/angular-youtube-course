import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpWithObservablesComponent } from './http-with-observables.component';

describe('HttpWithObservablesComponent', () => {
  let component: HttpWithObservablesComponent;
  let fixture: ComponentFixture<HttpWithObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpWithObservablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpWithObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
