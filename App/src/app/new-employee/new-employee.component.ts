import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent {

  constructor(private http: HttpClient) {}

  async onSubmit(formData: any) {
    console.log(formData);
    //use fetch to post the data
    const response = await fetch('http://localhost:8080/api/tgcc/v1/employee/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    console.log(data);
    if(data.message == "succes"){
      alert("Employee Created Successfully");
    }else if(data.message == "duplicate"){
      alert("Employee already exists");
    }else{
      alert("Error creating employee");
    }
    formData.reset();
  }
  

}
