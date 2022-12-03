import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Suscripcion } from '../models/suscripcion';
import { SuscripcionFirestoreService } from '../suscripcion-firestore.service';

@Component({
  selector: 'app-tabla-suscriptores',
  templateUrl: './tabla-suscriptores.component.html',
  styleUrls: ['./tabla-suscriptores.component.css']
})
export class TablaSuscriptoresComponent {
  displayedColumns: string[] = ['id', 'email'];
  dataSource?: MatTableDataSource<Suscripcion>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private suscripcionesService: SuscripcionFirestoreService) { }

  ngOnInit() {
    this.suscripcionesService.getAll().subscribe({
      next: (suscripciones) => {
        this.dataSource = new MatTableDataSource<Suscripcion>(suscripciones);
        this.dataSource.paginator = this.paginator;
      },
      error: (e) => console.log(e)
    });
  }
}
