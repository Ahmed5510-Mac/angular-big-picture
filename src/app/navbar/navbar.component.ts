import { Component,OnInit } from '@angular/core';
import{AuthService} from '../services/auth.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  implements OnInit {
  constructor(private _AuthService:AuthService){}
  logoSrc:string = '../../assets/images/logo-dark.png'
  isLogin:boolean = false;
  ngOnInit(): void {

this._AuthService.currentUser.subscribe(cur=>{
  if ( cur ){
    this.isLogin = true;
     console.log("after",this.isLogin);
  }
  else
  this.isLogin = false;
},err=>{})
  }

  logOut(){
    this._AuthService.logout()
  };



}
