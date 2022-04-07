import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientslistComponent } from './patientslist/patientslist.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { UpdatepatientComponent } from './updatepatient/updatepatient.component';
const routes: Routes = [
  {
    path: 'patientslist',
    component: PatientslistComponent,
    pathMatch: 'full'
  },
  {
    path: 'addPatient',
    component: AddpatientComponent,
    pathMatch: 'full'
  },
  {
    path: 'updatepatient/:id',
    component: UpdatepatientComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
