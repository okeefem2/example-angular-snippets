import { TestBed } from '@angular/core/testing';

import { ExampleComponentLibService } from './example-component-lib.service';

describe('ExampleComponentLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExampleComponentLibService = TestBed.get(ExampleComponentLibService);
    expect(service).toBeTruthy();
  });
});
