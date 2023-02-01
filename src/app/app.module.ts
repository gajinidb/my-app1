import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquereComponent } from './squere/squere.component';
import { GradeComponent } from './grade/grade.component';
import { WishingComponent } from './wishing/wishing.component';
import { AdvancecalculatorComponent } from './advancecalculator/advancecalculator.component';
import { DirectivesComponent } from './directives/directives.component';
import { CarsComponent } from './cars/cars.component';
import { FeeComponent } from './fee/fee.component';
import { PipesComponent } from './pipes/pipes.component';
import { PhonesComponent } from './phones/phones.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { PhotosComponent } from './photos/photos.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarttComponent } from './cartt/cartt.component';
import { RatingComponent } from './rating/rating.component';
import { AboutUsModule } from './about-us/about-us.module';
import { PricePipe } from './price.pipe';
import { ImpDirective } from './imp.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    CalculatorComponent,
    DataBindingComponent,
    RectangleComponent,
    SquereComponent,
    GradeComponent,
    WishingComponent,
    AdvancecalculatorComponent,
    DirectivesComponent,
    CarsComponent,
    FeeComponent,
    PipesComponent,
    PhonesComponent,
    VehicleComponent,
    ProductComponent,
    StudentComponent,
    CreateVehicleComponent,
    CreateStudentComponent,
    MailBoxComponent,
    PhotosComponent,
    VehicleDetailsComponent,
    CreateUserComponent,
    ParentComponent,
    ChildComponent,
    FlipcartComponent,
    NavbarComponent,
    CarttComponent,
    RatingComponent,
    PricePipe,
    ImpDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
