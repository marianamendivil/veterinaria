import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PetsService, MedicalRecord, Visits } from 'src/app/services/pets.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {
  newPet: FormGroup;
  visitwithId: FormGroup;
  medicalRecord: MedicalRecord;
  visit: Visits;
  petId: any;

  constructor(private petsService: PetsService, private router: Router) {}

  ngOnInit() {
    this.newPet = new FormGroup({});
    this.visitwithId = new FormGroup({});
  }

  saveChanges() {
    this.visit = this.newPet.get('visitForm').value;
    this.medicalRecord = this.newPet.get('medicalRecordForm').value;
    //const newPet = Object.assign(this.newPet.get('medicalRecordForm').value, this.newPet.get('visitForm').value);

    console.log(this.visit);
    console.log(this.medicalRecord);

    if (this.newPet.invalid) {
      console.log('Form no valido');
      return;
    }

    /*if (this.medicalRecordForm.value.id) {
      this.petsService.updateRecord(this.medicalRecordForm.value).subscribe(resp => {
        console.log(resp);
      });
    } else {
    }*/

    this.petsService.addRecord(this.medicalRecord).subscribe(resp => {
      console.log(resp);
      this.medicalRecord = resp;
      this.petId = this.medicalRecord.id;
      console.log(this.petId);
      this.visit.petId = this.petId;
      this.petsService.addVisit(this.visit).subscribe(resp => {
        //console.log(resp);
        Swal.fire({
          title: 'Registro guardado exitosamente',
          text: this.newPet.get('medicalRecordForm').value.petData.name,
          icon: 'success'
        });
        this.newPet.reset();
        this.router.navigate(['/pets']);
      });
    });

  }
}
