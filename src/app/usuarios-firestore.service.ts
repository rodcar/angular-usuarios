import {
  CollectionReference,
  DocumentData,
  collection,
} from '@firebase/firestore';

import { collectionData, Firestore } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Cliente {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosFirestoreService {
  private COLLECTION_NAME = "clientes";
  private clientesCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this.clientesCollection = collection(this.firestore, this.COLLECTION_NAME);
  }

  getAll() {
    return collectionData(this.clientesCollection, {
      idField: 'id',
    }) as Observable<Cliente[]>;
  }
}
