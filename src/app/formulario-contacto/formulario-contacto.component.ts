import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent {
  contactoForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mensaje: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(250)]]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log(this.contactoForm.errors);
  }
}
