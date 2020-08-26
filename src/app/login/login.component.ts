import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
//import swal from 'sweetalert';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public  user:any;
  constructor(private toastr: ToastrService) {
   this.user={
 nombres:'',
Apellidos:'',
Email:'',
identificacion:'',
telefono:'',
direccion:'',
barrio:'',
password:''

   }

   }

  ngOnInit() {
  }

reGistrar(){
 //console.log(this.user);
 if(this.user.nombres==""){
   
   this.toastr.error('El campo Nombres es  obligatorio');
   return  false; 	
 }

if(this.user.Apellidos==""){
   
   this.toastr.error('El campo Apellidos es  obligatorio');
   return  false; 	
 }

 if(this.user.Email==""){
   this.toastr.error('El campo Email es  obligatorio');
   return  false; 	
 }
 if(this.user.identificacion==""){
   this.toastr.error('El campo identificacion es  obligatorio');
   return  false; 	
 }

if(this.user.telefono==""){
   this.toastr.error('El campo telefono es  obligatorio');
   return  false; 	
 }

}

}
