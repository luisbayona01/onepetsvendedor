import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Cproductos} from '../interfaces/cproductos';

@Injectable({
  providedIn: 'root'
})

export class CategoriaProductoService {
 
  Api='https://www.cubic.com.co/apiecommercemerka/public/index.php/';
  constructor(private htppClient:HttpClient) {}
 

  getCategoriasP() {
    return this.htppClient.get(this.Api+'getcategoryp');
  }
 
   getpclip() {
    //return this.htppClient.get(this.Api+'showBarrio');
      return this.htppClient.get(this.Api+'getpclientes');
  }
  
  
   distribuiDorCli(param) {
    //return this.htppClient.get(this.Api+'showLocalidad');
    //const headers=new HttpHeaders(  {'Content-Type':'application/x-www-form-urlencoded'});
    return this.htppClient.post(this.Api+'clientesdistribuidor',param);

  }
 
    ADD_Orden(param){
    
    //const headers=new HttpHeaders(  {'Content-Type':'application/x-www-form-urlencoded'});
    return this.htppClient.post(this.Api+'addorden',param);
  }

  mostrarordn(param){
    
    //const headers=new HttpHeaders(  {'Content-Type':'application/x-www-form-urlencoded'});
    return this.htppClient.post(this.Api+'ShoWorden',param);
   }


}