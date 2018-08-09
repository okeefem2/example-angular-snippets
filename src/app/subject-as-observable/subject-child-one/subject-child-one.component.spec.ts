import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectChildOneComponent } from './subject-child-one.component';

describe('SubjectChildOneComponent', () => {
  let component: SubjectChildOneComponent;
  let fixture: ComponentFixture<SubjectChildOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectChildOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
