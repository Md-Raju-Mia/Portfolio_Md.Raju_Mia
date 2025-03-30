import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project1ComponentComponent } from './project1-component.component';

describe('Project1ComponentComponent', () => {
  let component: Project1ComponentComponent;
  let fixture: ComponentFixture<Project1ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Project1ComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Project1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
