import { TestBed } from '@angular/core/testing';

import { SuscripcionFirestoreService } from './suscripcion-firestore.service';

describe('SuscripcionFirestoreService', () => {
  let service: SuscripcionFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuscripcionFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
