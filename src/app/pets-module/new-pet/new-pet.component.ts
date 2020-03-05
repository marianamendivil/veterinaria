import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PetsService } from 'src/app/services/pets.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {
  medicalRecordForm: FormGroup;
  visitForm: FormGroup;

  constructor(private petsService: PetsService) {}

  ngOnInit() {}

  setMedicalRecordForm(medical) {
    console.log(medical);
    this.medicalRecordForm = medical;
  }

  setVisitForm(visit) {
    console.log(visit);
    this.visitForm = visit;
  }

  saveChanges() {
    const newPet = Object.assign(this.medicalRecordForm.value, this.visitForm.value);

    if (this.medicalRecordForm.invalid && this.visitForm.invalid) {
      console.log('Form no valido');
      return;
    }

    /*if (this.medicalRecordForm.value.id) {
      this.petsService.updateRecord(this.medicalRecordForm.value).subscribe(resp => {
        console.log(resp);
      });
    } else {
    }*/
    this.petsService.addRecord(newPet).subscribe(resp => {
      Swal.fire({
        title: 'Registro guardado exitosamente',
        text: this.medicalRecordForm.value.petData.name,
        icon: 'success'
      });
      console.log(resp);
    });
  }
}
