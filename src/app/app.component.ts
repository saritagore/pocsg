import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BtnfooterComponent } from "./btnfooter/btnfooter.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BtnfooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'saritapoc';
  menu = [
    {
      title: 'Patient Visit Details',
      expanded: true,
      items: [
        "Patient Visit Details","Patient Visit Questionnaire","Patient Visit QC Questionnaire",
        "PV-Documents", 'PV-Observation & Investigation Findings'
      ]
    },
    {
      title: 'Hospital Visit',
      expanded: false,
      items: [
        'Hospital Visit',
        'Owner Details',
        'Hospital Detail Questionnaire',
        'Hospital Detail QC Questionnaire',
        'HV-Documents',
        'HV-Observation & Investigation Findings'
      ]
    },
    {
      title: 'Hospital Infra Audit',
      expanded: false,
      items: []
    },
    {
      title: 'LAB Visit',
      expanded: false,
      items: []
    }
  ];

  toggleSection(section: any) {
    section.expanded = !section.expanded;
  }
}
