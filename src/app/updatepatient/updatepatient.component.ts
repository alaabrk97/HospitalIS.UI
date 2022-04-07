import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { patient } from '../patient.model';
import { PatientService } from '../patient.service';
import { FormGroup, FormControl } from '@angular/forms';
import { timeout } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-updatepatient',
  templateUrl: './updatepatient.component.html',
  styleUrls: ['./updatepatient.component.css']
})
export class UpdatepatientComponent implements OnInit {
  constructor(public service: PatientService, private router: ActivatedRoute,
    private routr: Router, private toastr: ToastrService) { }

  editPatient = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    birthDate: new FormControl(''),
    natinality: new FormControl(''),
    citizenId: new FormControl(''),
    gender: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl(''),
    street: new FormControl(''),
    address1: new FormControl(''),
    address2: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    contactPerson: new FormControl(''),
    contactRelation: new FormControl(''),
    contactPhone: new FormControl(''),
    fileNo: new FormControl(''),
    firstVisitDate: new FormControl(''),
    recordCreationDate: new FormControl(''),
  });
  message: boolean = false;
  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.service.getPatientById(this.router.snapshot.params['id']).subscribe((result: any) => {
      console.log(result);
      this.editPatient = new FormGroup({
        id: new FormControl(result['id']),
        name: new FormControl(result['name']),
        birthDate: new FormControl(result['birthdate']),
        natinality: new FormControl(result['natinality']),
        citizenId: new FormControl(result['citizenId']),
        gender: new FormControl(result['gender']),
        country: new FormControl(result['country']),
        city: new FormControl(result['city']),
        street: new FormControl(result['street']),
        address1: new FormControl(result['address1']),
        address2: new FormControl(result['address2']),
        email: new FormControl(result['email']),
        phoneNumber: new FormControl(result['phoneNumber']),
        contactPerson: new FormControl(result['contactPerson']),
        contactRelation: new FormControl(result['contactRelation']),
        contactPhone: new FormControl(result['contactPhone']),
        fileNo: new FormControl(result['fileNo']),
        firstVisitDate: new FormControl(result['firstVisitDate']),
        recordCreationDate: new FormControl(result['recordCreationDate']),
      });
    });
  }
  updateData() {
    this.service.updatePatientData(this.router.snapshot.params['id'], this.editPatient.value)
      .subscribe((result) => {
        console.log(result);
        alert("update successfully");
        this.routr.navigateByUrl('/patientslist');
      });
  }
}