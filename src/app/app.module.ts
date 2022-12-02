import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioRegistroUsuarioComponent, UsuarioSuccessDialog } from './formulario-registro-usuario/formulario-registro-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ContactoSuccessDialog, FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';

import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { ContactoPageComponent } from './pages/contacto-page/contacto-page.component';
import { AgregarUsuarioPageComponent } from './pages/agregar-usuario-page/agregar-usuario-page.component';
import { UsuariosService } from './usuarios.service';
import { HttpClientModule } from '@angular/common/http';
import { EmailSuccessDialog, FormularioSuscripcionComponent } from './footer/formulario-suscripcion/formulario-suscripcion.component';
import {MatDialogModule} from '@angular/material/dialog';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ContactoFirestoreService } from './contacto-firestore.service';
import { SuscripcionFirestoreService } from './suscripcion-firestore.service';

@NgModule({
  declarations: [
    AppComponent,
    FormularioRegistroUsuarioComponent,
    FormularioContactoComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    TablaUsuariosComponent,
    ContactoPageComponent,
    AgregarUsuarioPageComponent,
    FormularioSuscripcionComponent,
    EmailSuccessDialog,
    UsuarioSuccessDialog,
    ContactoSuccessDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [UsuariosService, ContactoFirestoreService, SuscripcionFirestoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
