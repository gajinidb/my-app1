import { Component } from '@angular/core';

@Component({
  selector: 'app-advancecalculator',
  templateUrl: './advancecalculator.component.html',
  styleUrls: ['./advancecalculator.component.css']
})
export class AdvancecalculatorComponent {
  public number:number=0;
  public results:number=0;
  //  public value:number=0;
  public result:string='?'



  square(){
    this.results=this.number*this.number;
  }
  quabe(){
  this.results=this.number*this.number*this.number;
}
condition(){
  if(this.number%2==0){
    this.result='even number';
  }
  else{
    this.result='odd number';
  }
}

}
