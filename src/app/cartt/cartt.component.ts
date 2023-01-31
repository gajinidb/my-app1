import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cartt',
  templateUrl: './cartt.component.html',
  styleUrls: ['./cartt.component.css']
})
export class CarttComponent {

  public cartcount:number=0;

  constructor(private commonService:CommonService){

    commonService.getvalue().subscribe(
      (data:any)=>{
        this.cartcount=data;
      }
    )
  }

}
