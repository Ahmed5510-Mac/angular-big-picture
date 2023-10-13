import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-conteng',
  templateUrl: './chat-conteng.component.html',
  styleUrls: ['./chat-conteng.component.scss']
})
export class ChatContengComponent {
  imgavtar:string='../../assets/images/ahmed darwish.jpg'
  @Input()users:any;
  constructor(){
    console.log(this.users);
   }
   sendMessage(e:Event){
    e.preventDefault()
    e.stopImmediatePropagation()
   }
}
