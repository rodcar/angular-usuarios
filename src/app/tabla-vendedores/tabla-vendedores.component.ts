import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Vendedor } from '../models/vendedor';
import { VendedoresFirestoreService } from '../vendedores-firestore.service';

@Component({
  selector: 'app-tabla-vendedores',
  templateUrl: './tabla-vendedores.component.html',
  styleUrls: ['./tabla-vendedores.component.css']
})
export class TablaVendedoresComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone'];
  dataSource?: MatTableDataSource<Vendedor>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private vendedoresService: VendedoresFirestoreService) { }

  ngOnInit() {
    this.vendedoresService.getAll().subscribe({
      next: (vendedores) => {
        this.dataSource = new MatTableDataSource<Vendedor>(vendedores);
        this.dataSource.paginator = this.paginator;
      },
      error: (e) => console.log(e)
    });
  }
}
