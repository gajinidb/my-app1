import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


public cartcount:number=0
  constructor(private commonService:CommonService){

    commonService.getvalue().subscribe(
      (data:any)=>{
        this.cartcount=data;
      }
    )
  }

}
