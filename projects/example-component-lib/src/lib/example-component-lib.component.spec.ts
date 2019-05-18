import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleComponentLibComponent } from './example-component-lib.component';

describe('ExampleComponentLibComponent', () => {
  let component: ExampleComponentLibComponent;
  let fixture: ComponentFixture<ExampleComponentLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleComponentLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleComponentLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
