import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpclint:HttpClient) { }
  getstudent():Observable<any>{
    return this._httpclint.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student")

  }

  getFilteredstudents(term:any):Observable<any>{
    return this._httpclint.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term);
  }

  getsortedstudents(column:string,order:string):Observable<any>{
    return this._httpclint.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+column+"&order="+order);
  }

  getpagedstudents(limit:number,page:number):Observable<any>{
    return this._httpclint.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit="+limit+"&page="+page);
  }

  deletestudent(id:string):Observable<any>{
    return this._httpclint.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id);
  }

  createStudent(data:any):Observable<any>{
    return this._httpclint.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student",data);
  }
}
