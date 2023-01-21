import { HttpClient } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpClint:HttpClient) { }

  login(data:any):Observable<any>{
    return this._httpClint.post("https://reqres.in/api/login",data);
  }
}
