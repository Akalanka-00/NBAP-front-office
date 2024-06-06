import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProjectCreateComponent } from './user-project-create.component';

describe('UserProjectCreateComponent', () => {
  let component: UserProjectCreateComponent;
  let fixture: ComponentFixture<UserProjectCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProjectCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserProjectCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
