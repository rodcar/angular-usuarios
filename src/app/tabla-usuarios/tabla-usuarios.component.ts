import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent {
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website'];
  dataSource: any;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuariosService.getAll().subscribe(
      (response) => { this.dataSource = response; },
      (error) => { console.log(error); });
  }
}
