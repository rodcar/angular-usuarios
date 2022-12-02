import { TestBed } from '@angular/core/testing';

import { UsuariosFirestoreService } from './usuarios-firestore.service';

describe('UsuariosFirestoreService', () => {
  let service: UsuariosFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
