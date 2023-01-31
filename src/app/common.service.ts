import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public count:number=0;

  public countsub:BehaviorSubject<number>= new BehaviorSubject(0);

  constructor() { }

  setvalue(){
    this.countsub.next(this.count++);

  }

  getvalue(){
    return this.countsub.asObservable();
  }
}
