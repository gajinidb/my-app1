import { Component } from '@angular/core';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent {

   public submit:number=0;
  public marks:number=0;
  public result:string='0';
  public grade:string='0';

 results(){
  if (this.marks>=35 && this.marks<=50) {
  this.result='= pass';
    this.grade='e';
  }

  else if(this.marks>50 && this.marks<=60){
    this.result='= pass'
   this.grade='d';
  }
   else if (this.marks>=60 && this.marks<=75){
    this.result=' = pass';
    this.grade='c';

   }

   else if (this.marks>=75 && this.marks<=85){
    this.result='= pass';
    this.grade='b';

   }
   else if(this.marks>=85 && this.marks<=100){
    this.result='= pass';
     this.grade='a';
   }  

   else{
    this.result='= fail';
    this.grade='f'
    
   }
  
 }

}




