
export class LoginComponent{

  loginform=new FormGroup({
    Name :new FormControl('',[Validators.required]),
    Password :new FormControl('',[Validators.required]),
  });
  get Password(){
    return this.loginform.get('Password');
  }get Name(){
    return this.loginform.get('Name');
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