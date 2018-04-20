import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CachingPatternComponent } from './caching-pattern.component';

describe('CachingPatternComponent', () => {
  let component: CachingPatternComponent;
  let fixture: ComponentFixture<CachingPatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CachingPatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CachingPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
