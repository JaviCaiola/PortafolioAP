import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciosesionComponent } from '../app/components/iniciosesion/iniciosesion.component';
import { PortfolioRouteComponent } from '../app/components/portfolio-route/portfolio-route.component';

const routes: Routes = [
  //{path:'portfolio', component:PortfolioRouteComponent},
  //{path:'inicio', component:IniciosesionComponent},
  //{path:'', redirectTo:'portfolio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
