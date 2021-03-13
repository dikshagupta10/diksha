import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  firstname:string="Diksha";
  lastname:string="Gupta";
  age:number=20;
  val: string="";
  myfunction(): void{
    alert("Show an alert...");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
