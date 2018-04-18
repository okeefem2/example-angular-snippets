import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeButtonComponent } from './fade-button.component';

describe('FadeButtonComponent', () => {
  let component: FadeButtonComponent;
  let fixture: ComponentFixture<FadeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
