import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {

  public vehicle:any={};

  constructor(private _activatedroute:ActivatedRoute,private _vehicleService:VehicleService){
    _activatedroute.params.subscribe(
      (data:any)=>{
        // alert(data.id)

        this._vehicleService.getvehicle(data.id).subscribe(

      (data:any)=>{
        this.vehicle=data;
      },
      (err:any)=>{
      alert("internal server error")
      }     
          
        )
      }
    )
  }

}
