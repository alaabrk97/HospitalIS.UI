import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { patient } from './patient.model';
import { UpdatepatientComponent } from './updatepatient/updatepatient.component';
import { count, Observable } from 'rxjs';
import { Gender } from './Gender.model';
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor(private http: HttpClient) { }

  url: string = "https://localhost:7197/api/Patients";

  pageSize: number = 5;
  pageNumber: number = 1;

  patients: patient[];
  patient: patient;

  getAlPatients() {
    this.http.get<patient[]>(this.url + "/all?PageNumber=" + this.pageNumber + "&PageSize=" + this.pageSize).toPromise().then(
      res => {
        this.patients = res as patient[];
      }
    );
  }
  postPatient() {
    return this.http.post(this.url, this.patient);
  }
  deletePatient(id: string) {
    return this.http.delete(this.url + '/' + id);
  }
  getPatientById(id: string) {
    return this.http.get(this.url + "/" + id);
  }

  updatePatientData(id: string, data: any) {
    return this.http.put(this.url + "/" + id, data);
  }



  next() {
    this.pageNumber += 1;
  }
  Previous() {
    if (this.pageNumber > 1) {
      this.pageNumber -= 1;
    }
  }

}
