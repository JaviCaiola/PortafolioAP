import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInicialComponent } from './main-inicial.component';

describe('MainInicialComponent', () => {
  let component: MainInicialComponent;
  let fixture: ComponentFixture<MainInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainInicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
