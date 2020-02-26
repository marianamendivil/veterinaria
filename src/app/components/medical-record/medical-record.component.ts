import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PetsService, MedicalRecord } from '../../services/pets.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  styleUrls: ['./medical-record.component.css']
})
export class MedicalRecordComponent {
  medicalRecordForm: FormGroup;

  /*pet: MedicalRecord = {
    petData: {
      name: '',
      age: null,
      species: '',
      race: '',
      gender: '',
      weight: null,
      color: '',
      particularities: ''
    },
    ownerData: {
      ownerName: '',
      ownerLastName: '',
      address: '',
      phone: null
    }
  };*/

  constructor(private petsService: PetsService) {
    this.medicalRecordForm = new FormGroup({
      petData: new FormGroup({
        name: new FormControl('', Validators.required),
        age: new FormControl('', Validators.required)
      }),
      ownerData: new FormGroup({
        ownerName: new FormControl('', [Validators.required, Validators.minLength(2)]),
        ownerLastName: new FormControl('', Validators.required)
      })
    });
  }

  saveChanges() {
    if (this.medicalRecordForm.invalid) {
      console.log('Form no valido');
      return;
    }

    console.log(this.medicalRecordForm.value);
    console.log(this.medicalRecordForm.value.id);

    /*if (this.medicalRecordForm.value.id) {
      this.petsService.updateRecord(this.medicalRecordForm.value).subscribe(resp => {
        console.log(resp);
      });
    } else {
    }*/
    this.petsService.addRecord(this.medicalRecordForm.value).subscribe(resp => {
      Swal.fire({
        title: 'Registro guardado exitosamente',
        text: this.medicalRecordForm.value.petData.name,
        icon: 'success',
      });
      console.log(resp);
    });
  }
}
