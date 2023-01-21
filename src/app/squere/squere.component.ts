import { Component } from '@angular/core';

@Component({
  selector: 'app-squere',
  templateUrl: './squere.component.html',
  styleUrls: ['./squere.component.css']
})
export class SquereComponent {
  public length:number = 0;
  public result:number = 0;

  // area(){
  //   this.result=this.length;
  // }
  area(){
    this.result=this.length*this.length;
  }
  perimeter(){
    this.result=4*this.length;
  }
}
