import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyDataWidgetComponent } from './empty-data-widget.component';

describe('EmptyDataWidgetComponent', () => {
  let component: EmptyDataWidgetComponent;
  let fixture: ComponentFixture<EmptyDataWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyDataWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmptyDataWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
