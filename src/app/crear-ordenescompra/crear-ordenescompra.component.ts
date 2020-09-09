import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Cproductos} from '../interfaces/cproductos';
import {CategoriaProductoService} from '../services/CategoriaProductos.services';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Productos} from '../interfaces/Productos';
import {ClientesD} from '../interfaces/clientesD';
@Component({
  selector: 'app-crear-ordenescompra',
  templateUrl: './crear-ordenescompra.component.html',
  styleUrls: ['./crear-ordenescompra.component.css']
})

export class CrearOrdenescompraComponent implements OnInit {
public OC:any;
public CustomDates:any =[0];
 public valorinput:any;
categoriaP:Cproductos[];
productos:Productos[];
clientesD:ClientesD[];
  constructor(private toastr: ToastrService, private CategoriaProductoService:CategoriaProductoService,private httpClient:HttpClient) { 
  

 this.OC={
		categoriap:'',
		clientesd:''
		
       }
this.getdata();
this.getpcli();
this.getclidistribuidor();
  }

  ngOnInit() {
  }


 getdata():void{

let elem: any;
  this.CategoriaProductoService.getCategoriasP().subscribe( (data:Cproductos[])=>{this.categoriaP=data;
   $(document).ready(function(){
 
 
 elem = $("#tableproductos");
 elem.DataTable({"lengthChange": false,
                    
    });


  }) 


},(error)=>{
      console.log(error)
    });
    }


getpcli(){

let elem: any;
  this.CategoriaProductoService.getpclip().subscribe( (data:Productos[])=>{this.productos=data;
    
 elem = $("#categorias");
  //elem.selectpicker('destroy');
  $(document).ready(function(){
   
   elem.selectpicker();
 

  }) 
  

},(error)=>{
      console.log(error)
    });
    }


 getclidistribuidor(){
    
let elem: any;
let  formData:any = new FormData();
let distribuidor= sessionStorage.getItem('distribuidor');
formData.append("distribuidor",distribuidor);
 this.CategoriaProductoService.distribuiDorCli(formData).subscribe( (data:ClientesD[])=>{this.clientesD=data;
 
  elem = $("#cliente");
  //elem.selectpicker('destroy');
  $(document).ready(function(){
   
   elem.selectpicker();
 

  }) 
  

},(error)=>{
      console.log(error)
    });
 


 }  
AddOrdenC(cantidad,precio,producto,cliente){
   var  Cantidadinput = $("#"+cantidad);
     


  if(cliente==""){
   this.toastr.error(' porfavor seleccione un cliente');
   return  false; 
  }
 if(Cantidadinput.val()==""|| Cantidadinput.val()=='0'){
   this.toastr.error('la cantidad debe tener un valor valido');
   return  false; 
  }
     //this.valorinput = Cantidadinput.val() *;
  
  let  formData:any = new FormData();
  formData.append("valorTotal",precio);
  formData.append("idproducto",producto);
  formData.append("compradores",cliente);
  formData.append("cantidad",Cantidadinput.val());
 //console.log(cliente);
    this.CategoriaProductoService.ADD_Orden(formData).subscribe( (data)=>{this.toastr.success(data[0])
 

  Cantidadinput.val('0')
  //elem.selectpicker('destroy');
  
  

},(error)=>{
      console.log(error)
    });
 

 } 
}


