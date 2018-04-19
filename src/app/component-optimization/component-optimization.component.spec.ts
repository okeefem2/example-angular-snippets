import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentOptimizationComponent } from './component-optimization.component';

describe('ComponentOptimizationComponent', () => {
  let component: ComponentOptimizationComponent;
  let fixture: ComponentFixture<ComponentOptimizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentOptimizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
