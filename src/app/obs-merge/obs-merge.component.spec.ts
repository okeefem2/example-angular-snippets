import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsMergeComponent } from './obs-merge.component';

describe('ObsMergeComponent', () => {
  let component: ObsMergeComponent;
  let fixture: ComponentFixture<ObsMergeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsMergeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
