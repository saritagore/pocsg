import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientvisitdetailsComponent } from './patientvisitdetails/patientvisitdetails.component';
import { AngularbestinfoComponent } from './angularbestinfo/angularbestinfo.component';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'form'
    },
    {
        path:'dashboard', component: DashboardComponent
    },
    {
        path:'form', component: PatientvisitdetailsComponent
    },
    {
        path:'info',component: AngularbestinfoComponent
    }
];
