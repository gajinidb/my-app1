import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm:FormGroup= new FormGroup(
    {
      password: new FormControl(),
      email:new FormControl(),

    }
  )

  constructor(private _loginService:LoginService,private _router:Router){}
  login(){
    console.log(this.loginForm.value);
    this._loginService.login(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("login success full");

        sessionStorage.setItem("my-app-token",data.token)
        //navigate ot dashboard

        this._router.navigateByUrl("/dashboard");

      },
      (err:any)=>{
      alert("invalid crediantial");
      }
    )
  }





}
