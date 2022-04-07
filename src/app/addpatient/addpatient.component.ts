import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent implements OnInit {

  constructor(public service: PatientService, private router: Router) { }

  ngOnInit(): void {
    this.service.patient = {
      id: "",
      name: "",
      fileNo: 0,
      citizenId: "",
      birthdate: new Date(),
      gender: 0,
      natinality: "",
      phoneNumber: "",
      email: "",
      country: "",
      city: "",
      street: "",
      address1: "",
      address2: "",
      contactPerson: "",
      contactRelation: "",
      contactPhone: "",
      firstVisitDate: new Date(),
      recordCreationDate: new Date(),
    }
  }

  submit() {
    this.service.postPatient().subscribe(
      res => {
        this.service.getAlPatients();
        console.log("add");
        alert("added successfully");
        timeout(2000);
        this.router.navigateByUrl('/patientslist');
      },
      err => {
        console.log("error");
      }
    )
  }

}
