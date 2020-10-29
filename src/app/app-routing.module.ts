import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import {HomeGuard} from '../guards/home.guard';
import {IndexGuard} from '../guards/index.guard';
import {UserDataResolver} from '../resolvers/userData.resolvers'



import { LandigComponent} from './landig/landig.component';
import { TestComponent} from './test/test.component';
import { JsonComponent} from './json/json.component';

import {MainNavComponent} from './main-nav/main-nav.component';

import { AdminComponent } from './admin/admin.component';
import { AddproductsComponent} from './admin/addproducts/addproducts.component';
import { AddcategoriesComponent} from './admin/addcategories/addcategories.component'
import { RegisterComponent} from './register/register.component';
import {LoginComponent } from './login/login.component';
import {DashboardClienteComponent} from './dashboard-cliente/dashboard-cliente.component';
import {DashboardServerComponent} from './dashboard-server/dashboard-server.component';
import {AddsubcategoriesComponent} from './admin/addsubcategories/addsubcategories.component'
import { CarretComponent} from './carret/carret.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CarretAnonymousComponent } from './carret-anonymous/carret-anonymous.component';



 

const routes: Routes = [

  {
    path:'landing', 
    component:LandigComponent ,
    resolve:{UserDataResolver}
  },
  {
    path: '', 
    redirectTo: 'landing', 
    pathMatch: 'full',
    resolve:{UserDataResolver}
  },

  {path:'register', component: RegisterComponent},
  {
    path:'login', 
    component: LoginComponent,
    canActivate: [IndexGuard],

  },

  {
    path:'dashboard', 
    component: DashboardClienteComponent,
    resolve:{UserDataResolver},
    canActivate: [HomeGuard],
  },
  {
    path:'dashboard-admin', 
    component: DashboardServerComponent,
    canActivate: [HomeGuard],
  },
  {
  path:'carret', 
  component: CarretComponent,
  resolve:{UserDataResolver},
  //canActivate: [HomeGuard],
  },
  {
    path:'carret-anous', 
    component: CarretAnonymousComponent,
    //resolve:{UserDataResolver},
    //canActivate: [HomeGuard],
  },

  {
    path:'credit', 
    component: CreditCardComponent,
    resolve:{UserDataResolver},

  },

  {
    path:'test', 
    component: TestComponent
  },

  {path:'json', component: JsonComponent},
  {path:'nav', component: MainNavComponent, resolve:{UserDataResolver}},

  {path:'admin', component: AdminComponent},
 
  {path:'addproducts', component: AddproductsComponent,resolve:{UserDataResolver},},
  /*  agregar categorias  */
  {path:'addcategories', component: AddcategoriesComponent,resolve:{UserDataResolver},},
  {path:'addsubcategories', component: AddsubcategoriesComponent,resolve:{UserDataResolver},},

];








@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
