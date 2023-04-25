import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlogoComponent } from './editlogo.component';

describe('EditlogoComponent', () => {
  let component: EditlogoComponent;
  let fixture: ComponentFixture<EditlogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditlogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
