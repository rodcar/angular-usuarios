import { Component } from '@angular/core';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const USERS: User[] = [
  { id: 1, name: 'Ivan Rodriguez', username: 'rodcar', email: 'ivan.rodriguez@gmail.com', phone: '950322270', website: 'ivanrodriguez.com'},
  { id: 2, name: 'Ivan Rodriguez', username: 'rodcar', email: 'ivan.rodriguez@gmail.com', phone: '950322270', website: 'ivanrodriguez.com'},
  { id: 3, name: 'Ivan Rodriguez', username: 'rodcar', email: 'ivan.rodriguez@gmail.com', phone: '950322270', website: 'ivanrodriguez.com'},
  { id: 4, name: 'Ivan Rodriguez', username: 'rodcar', email: 'ivan.rodriguez@gmail.com', phone: '950322270', website: 'ivanrodriguez.com'},
  { id: 5, name: 'Ivan Rodriguez', username: 'rodcar', email: 'ivan.rodriguez@gmail.com', phone: '950322270', website: 'ivanrodriguez.com'},
  { id: 6, name: 'Ivan Rodriguez', username: 'rodcar', email: 'ivan.rodriguez@gmail.com', phone: '950322270', website: 'ivanrodriguez.com'},
  { id: 7, name: 'Ivan Rodriguez', username: 'rodcar', email: 'ivan.rodriguez@gmail.com', phone: '950322270', website: 'ivanrodriguez.com'},
  { id: 8, name: 'Ivan Rodriguez', username: 'rodcar', email: 'ivan.rodriguez@gmail.com', phone: '950322270', website: 'ivanrodriguez.com'},
  { id: 9, name: 'Ivan Rodriguez', username: 'rodcar', email: 'ivan.rodriguez@gmail.com', phone: '950322270', website: 'ivanrodriguez.com'},
  { id: 10, name: 'Ivan Rodriguez', username: 'rodcar', email: 'ivan.rodriguez@gmail.com', phone: '950322270', website: 'ivanrodriguez.com'}
];

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent {
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website'];
  dataSource = USERS;
}
