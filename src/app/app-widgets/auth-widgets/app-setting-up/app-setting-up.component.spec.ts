import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSettingUpComponent } from './app-setting-up.component';

describe('AppSettingUpComponent', () => {
  let component: AppSettingUpComponent;
  let fixture: ComponentFixture<AppSettingUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSettingUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppSettingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
