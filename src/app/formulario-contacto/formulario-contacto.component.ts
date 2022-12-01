import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
  
})
export class FormularioContactoComponent {
  contactoForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(50), Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$') ]],
    mensaje: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(250), Validators.pattern('[a-zA-Z0-9 ]*')]]
  });

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  onSubmit() {
    console.log(this.contactoForm.errors);
    this.openDialog()
  }
  openDialog() {
    this.dialog.open(ContactoSuccessDialog);
  }
}

@Component({
  selector: 'contacto-success-dialog',
  templateUrl: './registro-usuario-success-dialog.html',
})
export class ContactoSuccessDialog {}