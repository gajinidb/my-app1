import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
public students:any= [];
public term:string="";
public colunm:string="";
public order:string="";
public limit:number=0;
public totalpages:number=0;

constructor(private _studentservice:StudentService){
  this._studentservice.getstudent().subscribe(
    (data:any)=>{
      this.students=data;
    },
    (err:any)=>{
      alert("internal server error")
    }
  )
}

filter(){
  this._studentservice.getFilteredstudents(this.term).subscribe(
  (data:any)=>{
    this.students = data;
  },
  (err:any)=>{
    alert("internal server error")

  }
  )
}


sort(){
  this._studentservice.getsortedstudents(this.colunm,this.order).subscribe(
  (data:any)=>{
    this.students = data;
  },
  (err:any)=>{
    alert("internal server error")

  }
  )
}

page(page:number){
  this._studentservice.getpagedstudents(this.limit,page).subscribe(
  (data:any)=>{
    this.students = data;
  },
  (err:any)=>{
    alert("internal server error")

  }
  )
}
calctotalpages(){
  this.totalpages = Math.ceil(50/this.limit)
}

delete(id:string){
  this._studentservice.deletestudent(id).subscribe(
    (data:any)=>{
      alert("deleted success fully");
      location.reload();
    },
    (err:any)=>{
      ("internal server error");
    }
  )
}
}
