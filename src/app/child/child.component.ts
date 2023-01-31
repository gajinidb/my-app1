import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() public a:number=0;

  public b:number=0;
  @Output()bevent:EventEmitter<number> = new EventEmitter();

  send(){
    this.bevent.emit(this.b);
  }
}
