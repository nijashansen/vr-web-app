import { TestBed } from '@angular/core/testing';

import { AdminPageServiceService } from './admin-page-service.service';

describe('AdminPageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminPageServiceService = TestBed.get(AdminPageServiceService);
    expect(service).toBeTruthy();
  });
});
