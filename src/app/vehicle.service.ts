import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private _httpClint:HttpClient){
  }

  getvehicles():Observable<any>{
    return this._httpClint.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction");
  }
   getvehicle(id:any):Observable<any>{
      return this._httpClint.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id)
    }
    
  
  getFilteredvehicles(term:any):Observable<any>{
    return this._httpClint.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term);
  }
  getsortedvehicles(column:string,order:string):Observable<any>{
    return this._httpClint.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+column+"&order="+order);
  }

  getpagedvehicles(limit:number,page:number):Observable<any>{
    return this._httpClint.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit="+limit+"&page="+page);
  }

  deletevehicle(id:string):Observable<any>{
    return this._httpClint.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  }

  createVehicle(data:any):Observable<any>{
    return this._httpClint.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",data);
  }


  updateVehicle(data:any,id:any):Observable<any>{
    return this._httpClint.put("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id,data);
  }




}
