import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancecalculatorComponent } from './advancecalculator/advancecalculator.component';
import { AuthenticationGuard } from './authentication.guard';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { FeeComponent } from './fee/fee.component';
import { GradeComponent } from './grade/grade.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PhonesComponent } from './phones/phones.component';
import { PhotosComponent } from './photos/photos.component';
import { PipesComponent } from './pipes/pipes.component';
import { ProductComponent } from './product/product.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquereComponent } from './squere/squere.component';
import { StudentComponent } from './student/student.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { WishingComponent } from './wishing/wishing.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard], children:[
    {path:'home',component:HomeComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'squere',component:SquereComponent},
    {path:'grade',component:GradeComponent},
    {path:'wishing',component:WishingComponent},
    {path:'advancecalculator',component:AdvancecalculatorComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'cars',component:CarsComponent},
    {path:'fee',component:FeeComponent},
    {path:'pipes',component:PipesComponent},
    {path:'phones',component:PhonesComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'product',component:ProductComponent},
    {path:'student',component:StudentComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'create-student',component:CreateStudentComponent},
    {path:'mail-box',component:MailBoxComponent},
    {path:'photos',component:PhotosComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent}
  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



