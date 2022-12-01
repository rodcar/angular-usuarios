import { Component } from '@angular/core';
import { UsuariosFirestoreService } from '../usuarios-firestore.service';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent {
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website'];
  dataSource: any;

  //constructor(private usuariosService: UsuariosService) { }
  constructor(private clientesService: UsuariosFirestoreService) { }

  ngOnInit() {
    this.clientesService.getAll().subscribe({
      next: (users) => { this.dataSource = users; },
      error: (e) => console.log(e),
      complete: () => console.log('Usuarios cargados satisfactoriamente')
    });
    /*this.usuariosService.getAll().subscribe({
      next: (users) => { this.dataSource = users; },
      error: (e) => console.log(e),
      complete: () => console.log('Usuarios cargados satisfactoriamente')
    });*/
  }
}
