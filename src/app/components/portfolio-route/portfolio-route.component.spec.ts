import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioRouteComponent } from './portfolio-route.component';

describe('PortfolioRouteComponent', () => {
  let component: PortfolioRouteComponent;
  let fixture: ComponentFixture<PortfolioRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
