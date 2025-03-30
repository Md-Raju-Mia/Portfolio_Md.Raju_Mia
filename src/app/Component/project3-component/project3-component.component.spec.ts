import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project3ComponentComponent } from './project3-component.component';

describe('Project3ComponentComponent', () => {
  let component: Project3ComponentComponent;
  let fixture: ComponentFixture<Project3ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Project3ComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Project3ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
