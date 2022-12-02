import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { UsuariosFirestoreService } from '../usuarios-firestore.service';
import { SuscripcionFirestoreService } from '../suscripcion-firestore.service';
import { ContactoFirestoreService } from '../contacto-firestore.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  counters = {
    usuarios: 0,
    suscripciones: 0,
    contacto: 0
  };

  constructor(private clientesService: UsuariosFirestoreService,
    private suscripcionesService: SuscripcionFirestoreService,
    private contactoService: ContactoFirestoreService) { }

  ngOnInit() {
    this.clientesService.getAll().subscribe({
      next: (users) => {
        this.counters.usuarios = users.length;
      },
      error: (e) => console.log(e)
    });

    this.suscripcionesService.getAll().subscribe({
      next: (suscripciones) => {
        this.counters.suscripciones = suscripciones.length;
      },
      error: (e) => console.log(e)
    });

    this.contactoService.getAll().subscribe({
      next: (contactos) => {
        this.counters.contacto = contactos.length;
      },
      error: (e) => console.log(e)
    });
  }
}
