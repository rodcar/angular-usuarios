import { TestBed } from '@angular/core/testing';

import { VendedoresFirestoreService } from './vendedores-firestore.service';

describe('VendedoresFirestoreService', () => {
  let service: VendedoresFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendedoresFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
