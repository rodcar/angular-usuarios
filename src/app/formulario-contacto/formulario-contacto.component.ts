import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContactoFirestoreService } from '../contacto-firestore.service';
import { Contacto } from '../models/contacto';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']

})
export class FormularioContactoComponent {
  contacto?: Contacto;
  contactoForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(50), Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
    mensaje: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(250), Validators.pattern('[a-zA-Z0-9 ]*')]]
  });

  constructor(private fb: FormBuilder, public dialog: MatDialog, public contactoService: ContactoFirestoreService) { }

  onSubmit() {
    console.log(this.contactoForm.errors);
    this.addContacto();

  }

  addContacto() {
    this.contacto = {
      name: this.contactoForm.controls.name.value.trim(),
      email: this.contactoForm.controls.email.value.trim(),
      mensaje: this.contactoForm.controls.mensaje.value.trim()
    } as Contacto;
    this.contactoService.create(this.contacto).finally(() => {
      this.openDialog();
    });
  }

  openDialog() {
    this.dialog.open(ContactoSuccessDialog);
  }
}

@Component({
  selector: 'contacto-success-dialog',
  templateUrl: './registro-usuario-success-dialog.html',
})
export class ContactoSuccessDialog { }