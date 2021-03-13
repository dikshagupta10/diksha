import { Injectable } from "@angular/core";
import { IEmployee } from "./employee";


@Injectable()
export class MyserviceService {

  constructor() {}

  getAllEmp(): IEmployee[] {
    return [
      {empId:1001, empName:'ishaque', empSalary:23000},
      {empId:1001, empName:'basha', empSalary:23000},
      {empId:1001, empName:'raza', empSalary:23000},
      {empId:1001, empName:'ahmed', empSalary:23000},
      {empId:1001, empName:'sajid', empSalary:23000},
      {empId:1001, empName:'nisha', empSalary:23000},

    ];
  }
}