import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import {RegisService} from '../regis.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerform=new FormGroup({
    Name :new FormControl('',[Validators.required]),
    Roll :new FormControl('',[Validators.required]),
    Email :new FormControl('',[Validators.required]),
    Year :new FormControl('',[Validators.required]),
    Dept :new FormControl('',[Validators.required]),
    Password :new FormControl('',[Validators.required]),
  });
  get Name(){
    return this.registerform.value.Name;
  }
  get Roll(){
    return this.registerform.value.Roll;
  }
  get Email(){
    return this.registerform.value.Email;
  }
  get Year(){
    return this.registerform.value.Email;
  }
  get Dept(){
    return this.registerform.value.Dept;
  }
  get Password(){
    return this.registerform.value.Password;
  }

  constructor(private regc:RegisService) {}
  register(){
    console.log();
    this.regc.register(this.registerform.value).subscribe(
      response  => console.log('Success',response),
      error  => console.log('Error',error),
      );
     
  }
  ngOnInit(): void {
  }
}
