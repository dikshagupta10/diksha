import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent  {
  userForm= new FormGroup({
    name: new FormControl(),
    email:new FormControl(),
    phone:new FormControl(),
    address:new FormGroup(
      {
        street:new FormControl(),
        city:new FormControl(),
        pincode:new FormControl()
      }
    )
  });

  onSubmit(): void {
    console.log(this.userForm.value);
  }
}
