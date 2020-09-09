import { Component, OnInit } from '@angular/core';
import {ConsultaService} from '../services/Consulta.services';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 public  estado:string;
 ventas: string ;
 clientes: string;
 users:string;
  constructor(private ConsultaService:ConsultaService,private httpClient:HttpClient) { 
 this.getventastotalpesos();
 this.getventastotalclientes();
  //this.islogin();
 let dataestado= sessionStorage.getItem('estado');

       
         this.users =sessionStorage.getItem('users'); 
         this.users =sessionStorage.getItem('users');
        $("#users").html(sessionStorage.getItem('users'));
  }

  ngOnInit() {
  }



getventastotalpesos(){
let  formData:any = new FormData();
let distribuidor= sessionStorage.getItem('distribuidor');
formData.append("distribuidor",distribuidor);
 this.ConsultaService.ventaspesos(formData).subscribe( (data)=>{
    if(data[0]){
    this.ventas= data[0].totalventas;	
    }
    

},(error)=>{
      console.log(error)
    });
 
}


getventastotalclientes(){
let  formData:any = new FormData();
let distribuidor= sessionStorage.getItem('distribuidor');
formData.append("distribuidor",distribuidor);
 this.ConsultaService.ventasclientes(formData).subscribe( (data)=>{
  if(data[0]){
this.clientes=data[0].countador_ventas;
  	
  }

     

},(error)=>{
      console.log(error)
    });
 
}
}
