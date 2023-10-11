import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { RegestrationComponent } from './regestration/regestration.component';
import{authGuard} from './auth.guard'
import { whatsappChatComponent } from './whatsapp-chat/whatsapp-chat.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', redirectTo:"register" ,pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegestrationComponent},
  {path: 'whatsappChat',canActivate:[authGuard] ,component:whatsappChatComponent},
  {path: 'users',canActivate:[authGuard] ,component:UsersComponent},
  {path: 'about',canActivate:[authGuard], component:AboutComponent},
  {path: '**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
