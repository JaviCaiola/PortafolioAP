import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarskillComponent } from './agregarskill.component';

describe('AgregarskillComponent', () => {
  let component: AgregarskillComponent;
  let fixture: ComponentFixture<AgregarskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarskillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
