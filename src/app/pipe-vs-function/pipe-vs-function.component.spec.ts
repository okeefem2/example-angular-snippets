import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeVsFunctionComponent } from './pipe-vs-function.component';

describe('PipeVsFunctionComponent', () => {
  let component: PipeVsFunctionComponent;
  let fixture: ComponentFixture<PipeVsFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeVsFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeVsFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
