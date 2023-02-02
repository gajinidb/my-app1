import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobs } from './jobs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private _httpClint:HttpClient) { }

  getjobs():Observable<Jobs[]>{
    return this._httpClint.get<Jobs[]>("/assets/jobs.json");
  }
}
