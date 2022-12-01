import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-suscripcion',
  templateUrl: './formulario-suscripcion.component.html',
  styleUrls: ['./formulario-suscripcion.component.css']
})
export class FormularioSuscripcionComponent {

  suscripcionForm = this.fb.group({
    
    email: ['', [Validators.required, Validators.email, Validators.maxLength(50), Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$') ]]
    
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log(this.suscripcionForm.errors);
  }

}
 