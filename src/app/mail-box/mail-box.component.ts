import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent {

  public mails:any = [];

  constructor(private _mailService:MailService){
    this._mailService.getmail().subscribe(
      (data:any)=>{
        this.mails=data;
        // alert("success");
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

}
