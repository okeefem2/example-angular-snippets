import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushOptimizationComponent } from './on-push-optimization.component';

describe('OnPushOptimizationComponent', () => {
  let component: OnPushOptimizationComponent;
  let fixture: ComponentFixture<OnPushOptimizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnPushOptimizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnPushOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
