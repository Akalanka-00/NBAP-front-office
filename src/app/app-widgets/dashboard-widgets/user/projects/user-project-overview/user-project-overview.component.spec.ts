import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProjectOverviewComponent } from './user-project-overview.component';

describe('UserProjectOverviewComponent', () => {
  let component: UserProjectOverviewComponent;
  let fixture: ComponentFixture<UserProjectOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProjectOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserProjectOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
