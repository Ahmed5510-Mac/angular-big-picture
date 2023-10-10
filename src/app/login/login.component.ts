import { Component,OnInit } from '@angular/core';
import {FormGroup ,FormControl, Validators}from'@angular/forms'
import {Router} from '@angular/router';
import{AuthService} from '../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

constructor( private _Router:Router , private _AuthService:AuthService){}

  loginForm:FormGroup|any;
  invalidLogin:boolean=false
  errorMessage:any="errorMessage"


  ngOnInit(): void {
    this.loginForm=new FormGroup({
    "email":new FormControl(null,[Validators.required, Validators.email]),
    "password":new FormControl(null,[Validators.required , Validators.pattern(/^[A-Z]/)])
  })
  }
  loginFormFun(){
    this._AuthService.login(this.loginForm.value).subscribe(data=>{
      const user = data.find((user:any)=>{
        return user["email"] === this.loginForm.value.email && user["password"] === this.loginForm.value.password
      })
      if(user != null){
        // alert("User is exists")
        localStorage.setItem("user", JSON.stringify(user))
        this._Router.navigate(['/chat'])
        this.loginForm.reset()
      }
      else{
        alert("User is not exist")
      }
    },err=>{
      alert(err.message)

    })

  }
  goRegistration(){
    this._Router.navigate(['/register'])
  }

}
