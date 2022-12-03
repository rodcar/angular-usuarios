import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { UsuariosFirestoreService } from '../usuarios-firestore.service';
import { UsuariosService } from '../usuarios.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent {
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website'];
  dataSource?: MatTableDataSource<Cliente>;
  dataSource2: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  //constructor(private usuariosService: UsuariosService) { }
  constructor(private clientesService: UsuariosFirestoreService, private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.clientesService.getAll().subscribe({
      next: (users) => {
        this.dataSource = new MatTableDataSource<Cliente>(users);
        this.dataSource.paginator = this.paginator;
      },
      error: (e) => console.log(e),
      complete: () => console.log('Usuarios cargados satisfactoriamente')
    });
    this.usuariosService.getAll().subscribe({
      next: (users) => { this.dataSource2 = users; },
      error: (e) => console.log(e),
      complete: () => console.log('Usuarios cargados satisfactoriamente')
    });
  }
}
