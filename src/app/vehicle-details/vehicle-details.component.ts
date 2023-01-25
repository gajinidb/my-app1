import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {

  constructor(private _activatedroute:ActivatedRoute){
    _activatedroute.params.subscribe(
      (data:any)=>{
        alert(data.id)
      }
    )
  }

}
