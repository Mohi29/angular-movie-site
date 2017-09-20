import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import {User} from '../model/User'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

data:any={};
info:any={};

  
  constructor(private registerUser:RegisterService, private route:Router) { }

  myRegister()
{
  if(this.data.password!==this.data.confpassword){
    alert("password do not match");
  }
  else{
	this.registerUser.register(this.data)
	.subscribe((data)=>{ this.info=this.data ; })
  this.route.navigateByUrl('login');
}
}

  ngOnInit() {
  }

}




