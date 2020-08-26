import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
users:string;
public  estado:string;
  constructor() { 
  	 let dataestado= sessionStorage.getItem('estado');

				if (dataestado=='1') {
					this.estado='1';
				}else{
					this.estado='0';
				}
  this.users =sessionStorage.getItem('users');
   $("#users").html(sessionStorage.getItem('users'));
  //idusuarios
  }

  ngOnInit() {
  }

}
