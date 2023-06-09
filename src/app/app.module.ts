import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainInicialComponent } from './components/main-inicial/main-inicial.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { TrayectoriaComponent } from './components/trayectoria/trayectoria.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { PortfolioRouteComponent } from './components/portfolio-route/portfolio-route.component';
import { EditskillComponent } from './components/editskill/editskill.component';
import { FormSessionComponent } from './components/form-session/form-session.component';
import { AgregarskillComponent } from './components/agregarskill/agregarskill.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainInicialComponent,
    SobreMiComponent,
    TrayectoriaComponent,
    SkillsComponent,
    ProyectosComponent,
    ContactoComponent,
    FormacionComponent,
    FooterComponent,
    PortfolioRouteComponent,
    EditskillComponent,
    FormSessionComponent,
    AgregarskillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
