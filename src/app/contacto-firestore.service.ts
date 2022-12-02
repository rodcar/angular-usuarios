import {
  CollectionReference,
  DocumentData,
  collection,
} from '@firebase/firestore';

import { addDoc, collectionData, Firestore } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from './models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoFirestoreService {
  private COLLECTION_NAME = "contacto";
  private contactoCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.contactoCollection = collection(this.firestore, this.COLLECTION_NAME);
  }

  getAll() {
    return collectionData(this.contactoCollection, {
      idField: 'id',
    }) as Observable<Contacto[]>;
  }

  create(contacto: Contacto) {
    return addDoc(this.contactoCollection, contacto);
  }
}