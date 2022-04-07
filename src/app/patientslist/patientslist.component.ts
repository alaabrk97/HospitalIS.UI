import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { patient } from '../patient.model';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patientslist',
  templateUrl: './patientslist.component.html',
  styleUrls: ['./patientslist.component.css']
})
export class PatientslistComponent implements OnInit {

  constructor(public service: PatientService, private http: HttpClient,
    private router: Router) { }
  numPages: number = 1;
  numSize: number = this.service.pageSize;
  ngOnInit(): void {
    this.service.getAlPatients();
  }

  next() {
    console.log(this.numSize);
    this.numPages += 1;
    this.numSize = this.service.pageSize * this.numPages;
    this.service.next();
    this.service.getAlPatients();
  }

  Previous() {
    if (this.numPages > 1) {
      this.numPages -= 1;
      this.numSize -= this.service.pageSize;
      this.service.Previous();
      this.service.getAlPatients();
    }
  }

  deletePat(id: string) {
    let con = confirm("Do you need to delete item");
    if (con) {
      this.service.deletePatient(id).subscribe(res => {
        this.service.getAlPatients();
      });
    }
  }





}
