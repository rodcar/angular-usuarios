import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Vendedor } from '../models/vendedor';
import { VendedoresFirestoreService } from '../vendedores-firestore.service';

@Component({
  selector: 'app-formulario-registro-vendedor',
  templateUrl: './formulario-registro-vendedor.component.html',
  styleUrls: ['./formulario-registro-vendedor.component.css']
})
export class FormularioRegistroVendedorComponent {
  vendedorForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-ZÀ-ú\s ]*$')]],
    email: ['', [Validators.required, Validators.email]], // falta validar el correo cuando no tiene punto, por ejemplo: ivan@gmail
    phone: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(9), Validators.pattern('^[0-9]*$')]]
  });

  vendedor?: Vendedor;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private vendedoresService: VendedoresFirestoreService) { }

  onSubmit() {
    this.addVendedor();
  }

  addVendedor() {
    this.vendedor = {
      id: "",
      name: this.vendedorForm.controls.name.value.trim(),
      email: this.vendedorForm.controls.email.value,
      phone: this.vendedorForm.controls.phone.value
    } as Vendedor;

    this.vendedoresService.create(this.vendedor).finally(() => {
      this.openDialog();
      console.log(this.vendedorForm.value);
    });
  }

  openDialog() {
    this.dialog.open(VendedorSuccessDialog);
  }
}

@Component({
  selector: 'registro-vendedor-success-dialog',
  templateUrl: './registro-vendedor-success-dialog.html',
})
export class VendedorSuccessDialog { }