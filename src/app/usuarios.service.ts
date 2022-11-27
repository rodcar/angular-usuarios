import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private URL = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(this.URL);
  }
}
