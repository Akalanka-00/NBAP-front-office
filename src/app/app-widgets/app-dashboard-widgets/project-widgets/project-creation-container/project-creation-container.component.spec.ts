import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreationContainerComponent } from './project-creation-container.component';

describe('ProjectCreationContainerComponent', () => {
  let component: ProjectCreationContainerComponent;
  let fixture: ComponentFixture<ProjectCreationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCreationContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectCreationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
