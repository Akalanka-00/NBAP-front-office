import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFloatingInputComponent } from './app-floating-input.component';

describe('AppFloatingInputComponent', () => {
  let component: AppFloatingInputComponent;
  let fixture: ComponentFixture<AppFloatingInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFloatingInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppFloatingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
