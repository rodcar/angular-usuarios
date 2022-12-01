import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-formulario-registro-usuario',
  templateUrl: './formulario-registro-usuario.component.html',
  styleUrls: ['./formulario-registro-usuario.component.css']
})
export class FormularioRegistroUsuarioComponent {
  usuarioForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-ZÀ-ú\s ]*$')]],
    username: ['', [Validators.required, Validators.maxLength(25), Validators.pattern('^[a-zA-Z0-9_.-]*$')]],
    email: ['', [Validators.required, Validators.email]], // falta validar el correo cuando no tiene punto, por ejemplo: ivan@gmail
    phone: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(9), Validators.pattern('^[0-9]*$')]],
    website: ['', [Validators.required, Validators.maxLength(50), Validators.pattern('^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$')]]
  });

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  onSubmit() {
    console.log(this.usuarioForm.value);
    this.openDialog();
  }

  openDialog() {
    this.dialog.open(UsuarioSuccessDialog);
  }
}

@Component({
  selector: 'registro-usuario-success-dialog',
  templateUrl: './registro-usuario-success-dialog.html',
})
export class UsuarioSuccessDialog {}