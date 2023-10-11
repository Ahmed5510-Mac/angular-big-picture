import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {
  arrowiconChang=false
  searchiconChang=true
  iconswitch(){
    this.arrowiconChang= !this.arrowiconChang
    this.searchiconChang= !this.searchiconChang
  }
  normalicon(){
    this.arrowiconChang=false
    this.searchiconChang=true
  }
        AvatarIcon:string="../../assets/images/ahmed darwish.jpg"
        newMessageIcon:string="../../assets/images/iconmessage.png"
        statusIcon:string="../../assets/images/status.png"
        conversition=[
        { Name:'Ahmed Darwidh',time:'12:58 AM',leatsMessage:"Hello Ahmed 💝",imageUrl:'../../assets/images/ahmed darwish.jpg',leatsMessageRead:false},
        { Name:'Mohamed gmal',time:'1:5 AM',leatsMessage:"ايه الاخبار يامدير ",imageUrl:"../../assets/images/default-avatar.png",leatsMessageRead:true},
        { Name:'youssef Abohaty',time:'3:12 AM',leatsMessage:"ابعب الcv ",imageUrl:'../../assets/images/youssef.jpg',leatsMessageRead:false},
        { Name:'Essam Darwish',time:'7:8 BM',leatsMessage:"ايه الاخبار يانجم",imageUrl:'../../assets/images/essam.jpg',leatsMessageRead:true},
        { Name:' محمد الشحات ',time:'5:26 AM',leatsMessage:"فعل البرنامج لنور ",imageUrl:'../../assets/images/mohamed.jpg',leatsMessageRead:false},
        { Name:'رضا على',time:'4:00 BM',leatsMessage:"عايز اظبط الكاميرات ",imageUrl:'../../assets/images/reda.jpg',leatsMessageRead:true},
        { Name:' الشيخ عبد الكريم',time:'4:00 BM',leatsMessage:"  التليفون اخباره ايه ",imageUrl:'../../assets/images/abdelkarem.jpg',leatsMessageRead:false},
        { Name:' Moustafa taha',time:'4:00 BM',leatsMessage:"  واحشنى والله ",imageUrl:'../../assets/images/moustfa taha.jpg',leatsMessageRead:true},
        ]
}
