import { Component, OnInit } from '@angular/core';
import {CategoriaProductoService} from '../services/CategoriaProductos.services';
import { ToastrService } from 'ngx-toastr';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {ClientesD} from '../interfaces/clientesD';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
clientesD:ClientesD[];
  constructor(private toastr: ToastrService, private CategoriaProductoService:CategoriaProductoService,private httpClient:HttpClient) { 


this.getclidistribuidor() 

  }

  ngOnInit() {
  }


getclidistribuidor(){
let elem: any;

let  formData:any = new FormData();
let distribuidor= sessionStorage.getItem('distribuidor');
formData.append("distribuidor",distribuidor);
 this.CategoriaProductoService.distribuiDorCli(formData).subscribe( (data:ClientesD[])=>{this.clientesD=data;
    $(document).ready(function(){
 
 
 elem = $("#table-clientes");
 elem.DataTable();


  }) 

},(error)=>{
      console.log(error)
    });
 


 } 

}
