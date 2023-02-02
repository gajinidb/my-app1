import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  public vehicleForm:FormGroup = new FormGroup(
    {
      Vehicle: new FormControl(),
      manufacturer: new FormControl(),
      model: new FormControl(),
      type: new FormControl(),
      fuel: new FormControl(), 
    color: new FormControl(),
    image: new FormControl()
    }
  )
public isedit:boolean=false;
public id:any="";


  constructor(private _vehicleService:VehicleService,private _activatedRoute:ActivatedRoute){
    this._activatedRoute.params.subscribe(
      (data:any)=>{

        if(data.id){
          this.isedit= true;
          this.id=data.id;
          alert(data.id);
          _vehicleService.getvehicle(data.id).subscribe(
            (data:any)=>{
              this.vehicleForm.patchValue(data);
            }
          )
        } 
      }
    )

  }

  submit(){
    if(this.isedit){
      // console.log(this.vehicleForm.value);
      this._vehicleService.updateVehicle(this.vehicleForm.value,this.id).subscribe(
        (data:any)=>{
          alert("updated success fully");
        },
        (err:any)=>{
          alert("internal server error")
        }
      )
    }
    else{
      this._vehicleService.updateVehicle(this.vehicleForm.value,this.id).subscribe(
        (data:any)=>{
          alert("created success fully");
        },
        (err:any)=>{
          alert("internal server error")
        }
      )
    }
  }
}
