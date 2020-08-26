import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Ciudad} from '../interfaces/ciudad';
import {Localidad} from '../interfaces/localidad';
import {Barrios} from '../interfaces/barrios';

@Injectable({
  providedIn: 'root'
})

export class ConsultaService {
 
  Api='https://www.cubic.com.co/apiecommercemerka/public/index.php/';
  constructor(private htppClient:HttpClient) {}
 

  getCiudad() {
    return this.htppClient.get(this.Api+'showCiudad');
  }
 
   getBarrio(param) {
    //return this.htppClient.get(this.Api+'showBarrio');
      return this.htppClient.post(this.Api+'showBarrio',param);
  }
  
  
   getLocalidad(param) {
    //return this.htppClient.get(this.Api+'showLocalidad');
    //const headers=new HttpHeaders(  {'Content-Type':'application/x-www-form-urlencoded'});
    return this.htppClient.post(this.Api+'showLocalidad',param);

  }
 
  saveCliente(param){
    const headers=new HttpHeaders(  {'Content-Type':'application/x-www-form-urlencoded'});
    return this.htppClient.post(this.Api+'savecliente',param,{headers:headers});
  }

  ventaspesos(param){
    
    return this.htppClient.post(this.Api+'ventaspesos',param);
  }

  
 ventasclientes(param){

    return this.htppClient.post(this.Api+'totalventas',param);
  }

 autenticar(param){
  const headers=new HttpHeaders(  {'Content-Type':'application/x-www-form-urlencoded'});
    return this.htppClient.post(this.Api+'login',param,{headers:headers});
  }

}