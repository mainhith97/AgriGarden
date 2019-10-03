import { TestBed } from '@angular/core/testing';

import { AdmintokenInterceptorService } from './admintoken-interceptor.service';

describe('AdmintokenInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmintokenInterceptorService = TestBed.get(AdmintokenInterceptorService);
    expect(service).toBeTruthy();
  });
});
