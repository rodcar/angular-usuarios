import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro-usuario',
  templateUrl: './formulario-registro-usuario.component.html',
  styleUrls: ['./formulario-registro-usuario.component.css']
})
export class FormularioRegistroUsuarioComponent {
  usuarioForm = this.fb.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    phone: ['', Validators.required],
    website: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    alert("submitted");
  }
}
