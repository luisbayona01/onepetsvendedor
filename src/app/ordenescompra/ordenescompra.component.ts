import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Cproductos} from '../interfaces/cproductos';
import {CategoriaProductoService} from '../services/CategoriaProductos.services';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Productos} from '../interfaces/Productos';
import {ClientesD} from '../interfaces/clientesD';
@Component({
  selector: 'app-ordenescompra',
  templateUrl: './ordenescompra.component.html',
  styleUrls: ['./ordenescompra.component.css']
})
export class OrdenescompraComponent implements OnInit {
public OC:any;
categoriaP:Cproductos[];
productos:Productos[];
clied:ClientesD[];
  constructor(private toastr: ToastrService, private CategoriaProductoService:CategoriaProductoService,private httpClient:HttpClient) { 
 this.OC={
		categoriap:'',
		clientesd:'',
		total:'0'
		
       }
this.getclidistribuidor();


  }

  ngOnInit() {
  }
 
 getclidistribuidor(){
let elem: any;
let  formData:any = new FormData();
let distribuidor= sessionStorage.getItem('distribuidor');
formData.append("distribuidor",distribuidor);
 this.CategoriaProductoService.distribuiDorCli(formData).subscribe( (data:ClientesD[])=>{this.clied=data;
 
  elem = $("#cliente");
  //elem.selectpicker('destroy');
  $(document).ready(function(){
   
   elem.selectpicker();
 

  }) 
  

},(error)=>{
      console.log(error)
    });
 


 } 

ClienteChange(cliente){
  
 let  total:number;
let  formData:any = new FormData();
formData.append("comprador",cliente);
 this.CategoriaProductoService.mostrarordn(formData).subscribe( (data:Productos[])=>{this.productos=data;
  
    total=0;
    



     for(let i = 0; i<=data.length; i++){
     if(data[i]!==undefined){
     
       total+=parseInt(data[i]['valortotal']) + 0;	
     }

    	
    }
    
    this.OC.total=total;

    	//total+=numeros[i];

  
 //02120056500 
//console.log(total);

},(error)=>{
      console.log(error)
    });
}

}
