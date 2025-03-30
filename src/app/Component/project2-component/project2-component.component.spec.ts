import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project2ComponentComponent } from './project2-component.component';

describe('Project2ComponentComponent', () => {
  let component: Project2ComponentComponent;
  let fixture: ComponentFixture<Project2ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Project2ComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Project2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
