import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';





import { LandigComponent } from './landig/landig.component';
import { TestComponent } from './test/test.component';
import { JsonComponent } from './json/json.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AdminComponent } from './admin/admin.component';
import { AddcategoriesComponent } from './admin/addcategories/addcategories.component';
import { AddproductsComponent } from './admin/addproducts/addproducts.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardClienteComponent } from './dashboard-cliente/dashboard-cliente.component';
import { DashboardServerComponent } from './dashboard-server/dashboard-server.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { AddsubcategoriesComponent } from './admin/addsubcategories/addsubcategories.component';
import { AlertsComponent } from './alerts/alerts.component';
import { RegisterSuccessComponent } from './alerts/register-success/register-success.component';
import { CarretComponent } from './carret/carret.component';
import { SuccessComponent } from './alerts/success/success.component';
import { LimiteCreditoComponent } from './alerts/limite-credito/limite-credito.component';
import { CompraExitosaComponent } from './alerts/compra-exitosa/compra-exitosa.component';
import { NoCompraComponent } from './alerts/no-compra/no-compra.component';
import { SaldoComponent } from './alerts/saldo/saldo.component';
import { CarretAnonymousComponent } from './carret-anonymous/carret-anonymous.component';




@NgModule({
  declarations: [
    AppComponent,
    LandigComponent,
    TestComponent,
    JsonComponent,
    NavbarComponent,
    FooterComponent,
    MainNavComponent,
    AdminComponent,
    AddcategoriesComponent,
    AddproductsComponent,
    RegisterComponent,
    LoginComponent,
    DashboardClienteComponent,
    DashboardServerComponent,
    CreditCardComponent,
    AddsubcategoriesComponent,
    AlertsComponent,
    RegisterSuccessComponent,
    CarretComponent,
    SuccessComponent,
    LimiteCreditoComponent,
    CompraExitosaComponent,
    NoCompraComponent,
    SaldoComponent,
    CarretAnonymousComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatDialogModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
