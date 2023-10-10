import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable ,BehaviorSubject} from 'rxjs'
import{Router} from '@angular/router'
// import { UserData } from '../shared/userdata';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser=new BehaviorSubject(null)
  gardstatus=new BehaviorSubject(null)
  constructor( private _HttpClient:HttpClient ,private _Router:Router) {
    const storedUser:string|null=localStorage.getItem('user')
    if(storedUser!=null){
      this.currentUser.next( JSON.parse(storedUser))
    }else{
      return
    }
   }
  //  --------------registration-------------------
   registration(user:object):Observable<any>{
    return this._HttpClient.post(`http://localhost:3000/sinUp`, user);
   }
  //  --------------login-------------------
login(user:any):Observable<any>{
  // console.log("currentUser before ",this.currentUser);
  this.currentUser.next(user);
  // console.log("currentUser",this.currentUser.value);
  return this._HttpClient.get(`http://localhost:3000/sinUp`)
}
  //  --------------logout-------------------
  logout(){
    this.currentUser.next(null)
    localStorage.removeItem('user')
       this._Router.navigate(['/login'])
  }




}
