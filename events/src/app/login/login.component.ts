import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import {RegisService} from '../regis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginform=new FormGroup({
    email :new FormControl('',[Validators.required]),
    Password :new FormControl('',[Validators.required]),
  });
  get Password(){
    return this.loginform.get('Password');
  }get email(){
    return this.loginform.get('email');
  }
  constructor(private loginc:RegisService) { }
  login(){
    console.log();
    this.loginc.userlogin(this.loginform.value).subscribe(
      response  => console.log('Success',response),
      error  => console.log('Error',error),
      );
  }

  

}
