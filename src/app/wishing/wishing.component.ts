import { Component } from '@angular/core';

@Component({
  selector: 'app-wishing',
  templateUrl: './wishing.component.html',
  styleUrls: ['./wishing.component.css']
})
export class WishingComponent {
  
  public time:number=0;
  public wishing:String='0';
  // public result:string=0

  wish(){

    if(this.time>=0 && this.time<=12){
     this.wishing='Good morning';
    }
     else if(this.time>=12 && this.time<=16){
      this.wishing='Good AfterNoon';
     }
    else if(this.time>=16 && this.time<=20){
      this.wishing='Good evening';
    }

    else if(this.time>=20 && this.time<=24){
      this.wishing='Good Night';
    }else{
              this.wishing='Undefined';
    }
   
  }

}












