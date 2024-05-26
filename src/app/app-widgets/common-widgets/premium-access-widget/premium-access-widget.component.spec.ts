import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumAccessWidgetComponent } from './premium-access-widget.component';

describe('PremiumAccessWidgetComponent', () => {
  let component: PremiumAccessWidgetComponent;
  let fixture: ComponentFixture<PremiumAccessWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiumAccessWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PremiumAccessWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
