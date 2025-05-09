import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-patientvisitdetails',
  imports: [JsonPipe, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './patientvisitdetails.component.html',
  styleUrl: './patientvisitdetails.component.css'
})
export class PatientvisitdetailsComponent implements OnInit {
[x: string]: any;
  patientVisitData:any = [];
  apiService = inject(ApiService);
  ngOnInit(): void {
    this.apiService.getPatientVisitData().subscribe({
      next:(value:any)=> {
        if (value && value.status === 'SUCCESS') {
         this.patientVisitData = [...this.patientVisitData, ...value.responseData];
         this.transformRes();
        }
      },
      error(err) {
        console.log('error ', err);
      },
      complete() {
        console.log('compete');

      },
    })
  }
  transformRes() {
    this.patientVisitData.forEach((el:any)=> {
      el.fieldGroups.forEach((item:any)=>{
        item.fields.forEach((f:any)=>{
          try{
            f.attributes = JSON.parse(f.attributes)
          }catch(e){
          console.error('Error while json parse ',e)
          }
        });
        this.form = this.buildForm(item.fields);
      })
    })

    console.log( this.patientVisitData);
    console.log(this.form);
    
    
  }
  form!: FormGroup;

  buildForm(fields: any): FormGroup {
    const group:any = {};
    fields.forEach((field: any) => {
      const isRequired = field.attributes.isRequired === "true";
      group[field.field] = new FormControl(
        '', 
        isRequired ? Validators.required : []
      );
    });
    return new FormGroup(group);
  }
}
