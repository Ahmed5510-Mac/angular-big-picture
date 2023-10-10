import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvComponent } from './tv/tv.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { RegestrationComponent } from './regestration/regestration.component';
import{authGuard} from './auth.guard'
import { ChatComponent } from './chat/chat.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', redirectTo:"register" ,pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegestrationComponent},
  {path: 'chat',canActivate:[authGuard] ,component:ChatComponent},
  {path: 'users',canActivate:[authGuard] ,component:UsersComponent},
  {path: 'about',canActivate:[authGuard], component:AboutComponent},
  {path: '**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
