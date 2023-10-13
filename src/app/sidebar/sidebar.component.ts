import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {
  @Output()conversationClicked:EventEmitter <any> = new EventEmitter();
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
        { Name:'Ahmed Darwidh',time:'12:58 AM',leatsMessage:"Hello Ahmed 💝",imageUrl:'../../assets/images/ahmed darwish.jpg',
        leatsMessageRead:false,
            messages:[
              {id:1 ,body: 'Hello Ahmed 💝' ,time:'12:58', my:true},
              {id:2 ,body: 'hi how are you?' ,time:'12:59', my:false},
              {id:3 ,body: 'i am fine thanks' ,time:'1:00', my:true},
              {id:3 ,body: 'send to my files' ,time:'1:01', my:false}
            ]
        },
        { Name:'Mohamed gmal',time:'1:5 AM',leatsMessage:"ايه الاخبار يامدير ",imageUrl:"../../assets/images/default-avatar.png",leatsMessageRead:true,
        messages:[
          {id:1 ,body: 'ايه الاخبار' ,time:'12:58', my:true},
          {id:2 ,body: 'الحمد لله ووانت' ,time:'12:59', my:false},
          {id:3 ,body: 'بخير الحمد لله شفت نور' ,time:'1:00', my:true},
          {id:3 ,body: 'اليوم بازن الله' ,time:'1:01', my:false}
        ]},
        { Name:'youssef Abohaty',time:'3:12 AM',leatsMessage:"ابعب الcv ",imageUrl:'../../assets/images/youssef.jpg',leatsMessageRead:false,
        messages:[
          {id:1 ,body: ' احمد عامل ايه' ,time:'12:58', my:true},
          {id:2 ,body: 'الحمد لله وانت' ,time:'12:59', my:false},
          {id:3 ,body: 'بخير الحمد لله  ابعت ال سيفى' ,time:'1:00', my:true},
          {id:3 ,body: ' عيونى حاضر' ,time:'1:01', my:false}
        ]},
        { Name:'Essam Darwish',time:'7:8 BM',leatsMessage:"ايه الاخبار يانجم",imageUrl:'../../assets/images/essam.jpg',leatsMessageRead:true,
        messages:[
          {id:1 ,body: '   السلام عليكم ' ,time:'12:58', my:true},
          {id:2 ,body: '  وعليكم السلام' ,time:'12:59', my:false},
          {id:3 ,body: '     عامل ايه ' ,time:'1:00', my:true},
          {id:3 ,body: '  بخير' ,time:'1:01', my:false}
        ]},
        { Name:' محمد الشحات ',time:'5:26 AM',leatsMessage:"فعل البرنامج لنور ",imageUrl:'../../assets/images/mohamed.jpg',leatsMessageRead:false,

        messages:[
          {id:1 ,body: '   السلام عليكم ' ,time:'12:58', my:true},
          {id:2 ,body: '  وعليكم السلام' ,time:'12:59', my:false},
          {id:3 ,body: '     عامل ايه ' ,time:'1:00', my:true},
          {id:3 ,body: '  بخير' ,time:'1:01', my:false}
        ]},
        { Name:'رضا على',time:'4:00 BM',leatsMessage:"عايز اظبط الكاميرات ",imageUrl:'../../assets/images/reda.jpg',leatsMessageRead:true,
        messages:[
          {id:1 ,body: '   السلام عليكم ' ,time:'12:58', my:true},
          {id:2 ,body: '  وعليكم السلام' ,time:'12:59', my:false},
          {id:3 ,body: '     عامل ايه ' ,time:'1:00', my:true},
          {id:3 ,body: '  بخير' ,time:'1:01', my:false}
        ]},
        { Name:' الشيخ عبد الكريم',time:'4:00 BM',leatsMessage:"  التليفون اخباره ايه ",imageUrl:'../../assets/images/abdelkarem.jpg',leatsMessageRead:false,
        messages:[
          {id:1 ,body: '   السلام عليكم ' ,time:'12:58', my:true},
          {id:2 ,body: '  وعليكم السلام' ,time:'12:59', my:false},
          {id:3 ,body: '     عامل ايه ' ,time:'1:00', my:true},
          {id:3 ,body: '  بخير' ,time:'1:01', my:false}
        ]},
        { Name:' Moustafa taha',time:'4:00 BM',leatsMessage:"  واحشنى والله ",imageUrl:'../../assets/images/moustfa taha.jpg',leatsMessageRead:true,
        messages:[
          {id:1 ,body: '   السلام عليكم ' ,time:'12:58', my:true},
          {id:2 ,body: '  وعليكم السلام' ,time:'12:59', my:false},
          {id:3 ,body: '     عامل ايه ' ,time:'1:00', my:true},
          {id:3 ,body: '  بخير' ,time:'1:01', my:false}
        ]},
        ]
}
