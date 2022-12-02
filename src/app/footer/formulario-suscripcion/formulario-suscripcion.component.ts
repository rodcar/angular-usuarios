import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Suscripcion } from 'src/app/models/suscripcion';
import { SuscripcionFirestoreService } from 'src/app/suscripcion-firestore.service';

@Component({
  selector: 'app-formulario-suscripcion',
  templateUrl: './formulario-suscripcion.component.html',
  styleUrls: ['./formulario-suscripcion.component.css']
})
export class FormularioSuscripcionComponent {
  suscripcion?: Suscripcion;

  suscripcionForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email, Validators.maxLength(50), Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]]
  });

  constructor(private fb: FormBuilder, public dialog: MatDialog, public suscripcionService: SuscripcionFirestoreService) { }

  onSubmit() {
    //console.log(this.suscripcionForm.errors);
    this.addSuscripcion();
  }

  addSuscripcion() {
    this.suscripcion = {
      email: this.suscripcionForm.controls.email.value.trim()
    } as Suscripcion;
    this.suscripcionService.create(this.suscripcion).finally(() => {
      this.openDialog();
    });
  }

  openDialog() {
    this.dialog.open(EmailSuccessDialog);
  }
}
@Component({
  selector: 'email-success-dialog',
  templateUrl: './email-success-dialog.html',
})
export class EmailSuccessDialog { }