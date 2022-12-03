import {
  CollectionReference,
  DocumentData,
  collection,
} from '@firebase/firestore';

import { addDoc, collectionData, Firestore } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendedor } from './models/vendedor';

@Injectable({
  providedIn: 'root'
})
export class VendedoresFirestoreService {
  private COLLECTION_NAME = "vendedores";
  private clientesCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.clientesCollection = collection(this.firestore, this.COLLECTION_NAME);
  }

  getAll() {
    return collectionData(this.clientesCollection, {
      idField: 'id',
    }) as Observable<Vendedor[]>;
  }

  create(vendedor: Vendedor) {
    return addDoc(this.clientesCollection, vendedor);
  }
}
