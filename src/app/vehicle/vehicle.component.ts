import { animate } from '@angular/animations';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  public colunm:string="";
  public order:string="";
  public term:string = "";
  public vehicles:any= [];
  public limit:number=0;

  constructor(private _vechileService:VehicleService,private _router:Router){
    _vechileService.getvehicles().subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
  filter(){
    this._vechileService.getFilteredvehicles(this.term).subscribe(
    (data:any)=>{
      this.vehicles = data;
    },
    (err:any)=>{
      alert("internal server error")

    }
    )
  }
  sort(){
    this._vechileService.getsortedvehicles(this.colunm,this.order).subscribe(
    (data:any)=>{
      this.vehicles = data;
    },
    (err:any)=>{
      alert("internal server error")

    }
    )
  }
  page(page:number){
    this._vechileService.getpagedvehicles(this.limit,page).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )

  }

  delete(id:string){
    this._vechileService.deletevehicle(id).subscribe(
      (data:any)=>{
        alert("deleted success fully")
        location.reload();

      },
      (err:any)=>{
        ("internal server error")
      }
    )
  }

  view(id:any){
    this._router.navigateByUrl("/dashboard/vehicle-details/"+id);


  }

  edit(id:any){
    this._router.navigateByUrl("/dashboard/edit-vehicle/"+id);
  }
  


}
