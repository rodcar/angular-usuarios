import { TestBed } from '@angular/core/testing';

import { ContactoFirestoreService } from './contacto-firestore.service';

describe('ContactoFirestoreService', () => {
  let service: ContactoFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactoFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
