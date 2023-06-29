import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { FormeditComponent } from './components/formedit/formedit.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { PortfolioRouteComponent } from './components/portfolio-route/portfolio-route.component';
import { IniciosesionComponent } from './components/iniciosesion/iniciosesion.component';
import { IndexcomponentComponent } from './components/indexcomponent/indexcomponent.component';
import { EditskillComponent } from './components/editskill/editskill.component';
import { FormSessionComponent } from './components/form-session/form-session.component';

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
    FormeditComponent,
    PortfolioRouteComponent,
    IniciosesionComponent,
    IndexcomponentComponent,
    EditskillComponent,
    FormSessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
