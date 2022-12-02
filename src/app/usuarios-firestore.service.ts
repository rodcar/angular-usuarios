import {
  CollectionReference,
  DocumentData,
  collection,
} from '@firebase/firestore';

import { addDoc, collectionData, Firestore } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './models/cliente';

@Injectable({
  providedIn: 'root'
})
export class UsuariosFirestoreService {
  private COLLECTION_NAME = "clientes";
  private clientesCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.clientesCollection = collection(this.firestore, this.COLLECTION_NAME);
  }

  getAll() {
    return collectionData(this.clientesCollection, {
      idField: 'id',
    }) as Observable<Cliente[]>;
  }

  create(cliente: Cliente) {
    return addDoc(this.clientesCollection, cliente);
  }
}
