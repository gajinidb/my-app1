import { Component } from '@angular/core';
import { Jobs } from '../jobs';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  public jobs:Jobs[]=[];
  // public jobs:any="";

  constructor(private _jobService:JobsService){
    this._jobService.getjobs().subscribe(
      (data:Jobs[])=>{
        this.jobs=data;
      },
      (err:any)=>{
        alert("internal server error")
        
      }
    )
  }

}
