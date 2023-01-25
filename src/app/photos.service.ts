import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private _httpClint:HttpClient) { }

  getphotos():Observable<any>{
    return this._httpClint.get("https://api.imgflip.com/get_memes")
  }
}
