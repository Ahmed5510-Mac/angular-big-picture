import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators } from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.scss']
})
export class RegestrationComponent  {

  constructor( private _AuthService:AuthService,private _Router:Router ){}
  // ----------------------------------
  registrationForm: FormGroup = new FormGroup({
    "first-name": new FormControl(null,[Validators.required ,Validators.minLength(5) ]),
    "last-name": new FormControl(null,[Validators.required ,Validators.minLength(5) ]),
    "email": new FormControl(null,[Validators.required ,Validators.email]),
    "password": new FormControl(null,[Validators.required ,Validators.minLength(8),Validators.pattern(/^[A-Z ]/)]),
  })
  errorMessage:any="errorMessage"
  invalidRegestration:boolean= false
  // ----------------------------------
  registerForm(){
      if( this.registrationForm.valid==true) {
        this._AuthService.registration(this.registrationForm.value).subscribe(data=>{
          this.registrationForm.reset()
          this._Router.navigate(['/login']);
        },error=>{
          this.errorMessage=error.message
           this.invalidRegestration=true
           this._Router.navigate(['/login']);
        })
      }
  }
  // registerForm(){
  //     if( this.registrationForm.valid==true) {
  //       this._AuthService.registration(this.registrationForm.value).subscribe(data=>{
  //         console.log(data);
  //         // if(data.massege=='success')
  //            console.log('success');

  //           // this._Router.navigate(['/login']);
  //       },error=>{
  //         this.errorMessage=error.message
  //         this.invalidRegestration=true
  //         this._Router.navigate(['/login']);

  //       })
  //     }
  // }
  // ----------------------------
  goSignin(){
    this._Router.navigate(['/login']);
  }
}
