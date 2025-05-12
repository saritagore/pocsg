import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { OPTS } from '../data/selectoptions';

@Component({
  selector: 'app-patientvisitdetails',
  imports: [JsonPipe, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './patientvisitdetails.component.html',
  styleUrl: './patientvisitdetails.component.css'
})
export class PatientvisitdetailsComponent implements OnInit {
  patientVisitData: any = [];
  apiService = inject(ApiService);
  form!: FormGroup;
  ngOnInit(): void {
    this.apiService.getPatientVisitData().subscribe({
      next: (value: any) => {
        if (value && value.status === 'SUCCESS') {
          this.patientVisitData = [...this.patientVisitData, ...value.responseData];
          this.transformRes();
          console.log('FINAL  ',this.patientVisitData );
          
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
    this.patientVisitData.forEach((el: any) => {
      el.fieldGroups.forEach((item: any) => {
        item.fields.forEach((f: any) => {
          try {
            f.attributes = JSON.parse(f.attributes)
            if (f.attributes.type === 'select') {
              // get optios from code
             f.dropdownopts = this.getSelectOptions(f.fieldCode); //new attr added to form data
            }
          } catch (e) {
            console.error('Error while json parse ', e)
          }
        });
        this.form = this.buildForm(item.fields);
      })
    })
  }


  buildForm(fields: any): FormGroup {
    const group: any = {};
    fields.forEach((field: any) => {
      const isRequired = field.attributes.isRequired === "true";
      group[field.field] = new FormControl(
        '',
        isRequired ? Validators.required : []
      );
    });
    return new FormGroup(group);
  }

  getSelectOptions(fcode: string) {
    console.log('fieldcode ', fcode);
    console.log(OPTS[fcode]);
    // get options from api based on fcode sent
    return OPTS[fcode].lookUpValues
  }

  onSubmit() {
    console.log(this.form);
    
  }
}
