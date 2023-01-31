import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeoComponent } from './ceo/ceo.component';
import { AboutCompanyComponent } from './about-company/about-company.component';



@NgModule({
  declarations: [
    CeoComponent,
    AboutCompanyComponent,

  ],
  imports: [
    CommonModule
  ],
  exports:[
    AboutCompanyComponent,
  CeoComponent

  ]
})
export class AboutUsModule { }
