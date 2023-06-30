import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioRouteComponent } from './components/portfolio-route/portfolio-route.component';
import { FormSessionComponent } from './components/form-session/form-session.component';

const routes: Routes = [
  {path:'portfolio',component:PortfolioRouteComponent},
  {path:'iniciarsesion',component:FormSessionComponent},
  {path:'',redirectTo:'portfolio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
