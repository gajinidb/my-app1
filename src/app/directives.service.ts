import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectivesService {

  constructor(private _httpClint:HttpClient) { }

  deletedirectives(data:any):Observable<any>{
   return this._httpClint.delete("")
  }
  
}
