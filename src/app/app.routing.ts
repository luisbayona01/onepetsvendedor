import {ModuleWithProviders}  from '@angular/core';
import {Routes,RouterModule}  from '@angular/router';
import {LoginadminComponent}  from './loginadmin/loginadmin.component';
import {DashboardComponent}  from './dashboard/dashboard.component';
import{OrdenescompraComponent }from './ordenescompra/ordenescompra.component';
import{CrearOrdenescompraComponent} from './crear-ordenescompra/crear-ordenescompra.component';
import{CrearClientesComponent} from './crear-clientes/crear-clientes.component';
import {ClientesComponent} from './clientes/clientes.component';

const appRoutes:Routes=[
{path:'',component:LoginadminComponent},
{path:'dashboard',component:DashboardComponent},
{path:'ordenescompra',component:OrdenescompraComponent},
{path:'crear-ordencompra',component:CrearOrdenescompraComponent},
{path:'crearclientes',component:CrearClientesComponent},
{path:'clientes',component:ClientesComponent}
]

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);