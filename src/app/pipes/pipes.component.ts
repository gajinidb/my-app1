import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  public name:string='abc';
  public date:any= new Date();


  public user:any={name:'virat',age:30,isindian:'yes'}

}
