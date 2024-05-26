import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectViewContainerComponent } from './project-view-container.component';

describe('ProjectViewContainerComponent', () => {
  let component: ProjectViewContainerComponent;
  let fixture: ComponentFixture<ProjectViewContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectViewContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
