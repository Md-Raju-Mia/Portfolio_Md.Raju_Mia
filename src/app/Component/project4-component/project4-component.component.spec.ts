import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project4ComponentComponent } from './project4-component.component';

describe('Project4ComponentComponent', () => {
  let component: Project4ComponentComponent;
  let fixture: ComponentFixture<Project4ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Project4ComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Project4ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
