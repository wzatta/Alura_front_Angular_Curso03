import { TestBed } from '@angular/core/testing';

import { UnidadesFederativasService } from './unidades-federativas.service';

describe('UnidadesFederativasService', () => {
  let service: UnidadesFederativasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnidadesFederativasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
