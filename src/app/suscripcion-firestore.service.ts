import {
  CollectionReference,
  DocumentData,
  collection,
} from '@firebase/firestore';

import { addDoc, collectionData, Firestore } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Suscripcion } from './models/suscripcion';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionFirestoreService {
  private COLLECTION_NAME = "suscripciones";
  private clientesCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.clientesCollection = collection(this.firestore, this.COLLECTION_NAME);
  }

  getAll() {
    return collectionData(this.clientesCollection, {
      idField: 'id',
    }) as Observable<Suscripcion[]>;
  }

  create(suscripcion: Suscripcion) {
    return addDoc(this.clientesCollection, suscripcion);
  }
}
