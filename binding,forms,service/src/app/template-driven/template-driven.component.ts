import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent  {
  log(x:any)
  {
    console.log(x);
  }
  log1(y:any){console.log(y);}
  log2(z:any){console.log(z);}

  getData(loginForm: NgForm): void {
    console.log(loginForm.value);
  }


}
