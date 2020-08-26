import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {ConsultaService} from '../services/Consulta.services';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Ciudad} from '../interfaces/ciudad';
import {Localidad} from '../interfaces/localidad';
import {Barrios} from '../interfaces/barrios';
@Component({
  selector: 'app-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrls: ['./crear-clientes.component.css']
})
export class CrearClientesComponent implements OnInit {
 
 public cliente:any;
 ciudad:Ciudad[];
 localidades:Localidad[];
 barrios:Barrios[];
  constructor(private toastr: ToastrService, private ConsultaService:ConsultaService,private httpClient:HttpClient) {
  	 this.cliente={
		NombreP:'',
		ApellidosP:'',
		email:'',
		razonSocial:'',
		identificacion:'',
		nit:'',
		Telefono:'',
		Ciudad:'',
        localidad:'',
	    barrio:'',
	    Direccion:''
       }
  	this.getciudad();
   }

  ngOnInit() {


  }

  getciudad():void{

  let elem: any;
  this.ConsultaService.getCiudad().subscribe( (data:Ciudad[])=>{this.ciudad=data;
 

  $(document).ready(function(){
    elem = $("#Ciudad");
  elem.selectpicker();


   }) 
  
 
  },(error)=>{
      console.log(error)
    });

  }


CiudadChange(value){
let elem: any;
let  formData:any = new FormData();
formData.append("id_depto",value); 
//JSON.stringify(params)
  this.ConsultaService.getLocalidad(formData).subscribe( (data:Localidad[])=>{this.localidades=data;
    elem = $("#localidad");
   elem.selectpicker('destroy');
  $(document).ready(function(){
 
  elem.selectpicker();

  
   }) 
  
 
  },(error)=>{
      console.log(error)
    });

}

 LocalidadChange(value){

let elem: any;
let  formData:any = new FormData();
formData.append("id_localidad",value); 
//JSON.stringify(params)
  this.ConsultaService.getBarrio(formData).subscribe( (data:Barrios[])=>{this.barrios=data;
   
  elem = $("#barrio");
  elem.selectpicker('destroy');
  $(document).ready(function(){
   
   elem.selectpicker();
 

  }) 
  
 
  },(error)=>{
      console.log(error)
    });
 }

SaveCliente(){
 

 if(this.cliente.NombreP==""){
   
   this.toastr.error('El campo  nombre del propietario  es  obligatorio');
   return  false; 	
 }

if(this.cliente.ApellidosP==""){
   
   this.toastr.error('El campo apellidos del propietario  es  obligatorio');
   return  false; 	
 }

 if(this.cliente.email==""){
   
   this.toastr.error('El campo  email es  obligatorio');
   return  false; 	
 }

 if(this.cliente.razonSocial==""){
   
   this.toastr.error('El campo  razonSocial  es  obligatorio');
   return  false; 	
 }

 if(this.cliente.identificacion==""){
   
   this.toastr.error('El campo  identificacion  es  obligatorio');
   return  false; 	
 }
 if(this.cliente.nit==""){
   
   this.toastr.error('El campo  nit  es  obligatorio');
   return  false; 	
 }

 if(this.cliente.Telefono==""){
   
   this.toastr.error('El campo   Telefono   es  obligatorio');
   return  false; 	
 }

 if($("#Ciudad").val()=== null){
   
   this.toastr.error('El campo  Ciudad es obligatorio');
   return  false; 	
 }

 

if( $("#localidad").val()=== null){
   
   this.toastr.error('El campo  localidad es obligatorio');
   return  false; 	
 }


if($("#barrio").val()=== null){
   
   this.toastr.error('El campo  barrio es obligatorio');
   return  false; 	
 }
if(this.cliente.Direccion==""){
   
   this.toastr.error('El campo  Direccion es obligatorio');
   return  false; 	
 }
 var params=$("#clientes").serialize();
 this.ConsultaService.saveCliente(params).subscribe((data)=>{ this.toastr.success(data[0])
   
  var dirtyFormID = 'clientes';
var resetForm = <HTMLFormElement>document.getElementById(dirtyFormID);
resetForm.reset();
  
 
  },(error)=>{
      console.log(error)
    });

}
}

