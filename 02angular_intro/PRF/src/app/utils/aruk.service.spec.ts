import { TestBed } from '@angular/core/testing';

import { ArukService } from './aruk.service';

describe('ArukService', () => {
  let service: ArukService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArukService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
