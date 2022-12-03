import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { FormularioRegistroUsuarioComponent } from './formulario-registro-usuario/formulario-registro-usuario.component';
import { HomeComponent } from './home/home.component';
import { AgregarUsuarioPageComponent } from './pages/agregar-usuario-page/agregar-usuario-page.component';
import { ContactoPageComponent } from './pages/contacto-page/contacto-page.component';
import { TablaSuscriptoresComponent } from './tabla-suscriptores/tabla-suscriptores.component';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { TablaVendedoresComponent } from './tabla-vendedores/tabla-vendedores.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'vendedores',
    component: TablaVendedoresComponent
  },
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'agregar',
    component: AgregarUsuarioPageComponent
  },
  {
    path: 'contacto',
    component: ContactoPageComponent
  },
  {
    path: 'usuarios',
    component: TablaUsuariosComponent
  },
  {
    path: 'suscriptores',
    component: TablaSuscriptoresComponent
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
