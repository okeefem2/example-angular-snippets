import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableAnimationComponent } from './reusable-animation.component';

describe('ReusableAnimationComponent', () => {
  let component: ReusableAnimationComponent;
  let fixture: ComponentFixture<ReusableAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReusableAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
