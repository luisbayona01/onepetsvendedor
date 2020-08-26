import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public  estado:string;
  constructor(private router: Router) {
   
   }

  ngOnInit() {
  }
Logaout(){
	
sessionStorage.clear();
this.router.navigate(['']);
this.estado='0';
}
}
