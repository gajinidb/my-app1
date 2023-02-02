import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

public userForm:FormGroup=new FormGroup(
  {
    name:new FormControl("",[Validators.required,Validators.minLength(3)]),
    age:new FormControl("",[Validators.required,Validators.min(0),Validators.max(100)]),
    email:new FormControl("",[Validators.required,domainValidator]),
    phone:new FormControl(),
   address:new FormGroup({
      state:new FormControl(),
      pin:new FormControl("",[Validators.required,Validators.min(100000),Validators.max(999999)])

    }),
    type:new FormControl(),
    busfee:new FormControl(),
    hostelfee:new FormControl(),
    cards:new FormArray([])
  })
  get cardsFormarray(){
    return this.userForm.get('cards') as FormArray;
  }

  add(){
    this.cardsFormarray.push(
      new FormGroup({
        cardNo:new FormControl(),
        expiry: new FormControl(),
        cvv:new FormControl("",[Validators.required,Validators.min(100),Validators.max(999)])

      })
    )
  }

  delete(i:any){
    this.cardsFormarray.removeAt(i);

  }

  submit(){
    console.log(this.userForm.value)

  }
}
function domainValidator(control: AbstractControl): ValidationErrors | null{
  if(control.value.indexOf('@capgemini.com')== -1){
    return {'domainerror':'use capgemini.com at the end'}
  }else{

  return null
  }
}
