import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeditComponent } from './formedit.component';

describe('FormeditComponent', () => {
  let component: FormeditComponent;
  let fixture: ComponentFixture<FormeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
