import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { FormularioRegistroUsuarioComponent } from './formulario-registro-usuario/formulario-registro-usuario.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'agregar',
    component: FormularioRegistroUsuarioComponent
  },
  {
    path: 'contacto',
    component: FormularioContactoComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
