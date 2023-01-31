import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-flipcart',
  templateUrl: './flipcart.component.html',
  styleUrls: ['./flipcart.component.css']
})
export class FlipcartComponent {

  constructor(private commonService:CommonService){}

  add(){
    this.commonService.setvalue();

  }

}
