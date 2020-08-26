import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing,appRoutingProviders} from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule,ReactiveFormsModule }  from '@angular/forms';
import * as $ from 'jquery';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CrearClientesComponent } from './crear-clientes/crear-clientes.component';
import { OrdenescompraComponent } from './ordenescompra/ordenescompra.component';
import { CrearOrdenescompraComponent } from './crear-ordenescompra/crear-ordenescompra.component';
import { ProductosComponent } from './productos/productos.component';
import { CategoriaproductosComponent } from './categoriaproductos/categoriaproductos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    MenuComponent,
    LoginadminComponent,
    ClientesComponent,
    CrearClientesComponent,
    OrdenescompraComponent,
    CrearOrdenescompraComponent,
    ProductosComponent,
    CategoriaproductosComponent
    
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    HttpClientModule,
    routing,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
