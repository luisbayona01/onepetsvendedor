import { Component, OnInit } from '@angular/core'; 
import { ToastrService } from 'ngx-toastr';
import {ConsultaService} from '../services/Consulta.services';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {
public  useradmin:any;
public  estado:string;
users:string;

  constructor(private router: Router,private toastr: ToastrService, private ConsultaService:ConsultaService,private httpClient:HttpClient) {
		this.useradmin={
	    Username:'',
	    Password:''}
  this.islogin();
  let dataestado= sessionStorage.getItem('estado');
     if (dataestado=='1') {
          $("#estado").show();
        }else{
           $("#estado").hide();
          //this.router.navigate(['']);
        }
		   }

      ngOnInit() {}

     islogin():void{
     let dataestado= sessionStorage.getItem('estado');


     if (dataestado=='1') {
          $("#estado").show();
        }else{
           $("#estado").hide();
          //this.router.navigate(['']);
        }
				if (dataestado=='1') {
					this.estado='1';
					this.router.navigate(['/dashboard']);
				}else{
					this.estado='0';
					this.router.navigate(['']);
				}


     }
		LoginAdmin(){
		 if(this.useradmin.Username==""){
		   
		   this.toastr.error('El campo  Username  es  obligatorio');
		   return  false; 	
		        }

		  if(this.useradmin.Password==""){
		   
		     this.toastr.error('El campo  Password  es  obligatorio');
		      return  false; 	
		        }
		  
		     var params=$("#logear").serialize();
		   this.ConsultaService.autenticar(params).subscribe((data)=>{ 

		       if(data[0]){
              //console.log(data);
		       sessionStorage.setItem('users',data[0].users);
		       sessionStorage.setItem('distribuidor',data[0].idusuarios);
		       
		          sessionStorage.setItem('estado','1');
		         this.users =sessionStorage.getItem('users');
		       ///window.location.reload(true);
		       //location.reload();
	    let dataestado= sessionStorage.getItem('estado');

				if (dataestado=='1') {
					this.estado='1';
					 this.router.navigate(['/dashboard']);
				}else{
					this.estado='0';
					 this.router.navigate(['']);
				}
		       } else{
                  this.toastr.error(' usuario o contraseña invalidos');

		       }
		     //		

	 },(error)=>{
      console.log(error)
    });
		}
    
	
}
		