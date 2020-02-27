import { Component, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor() {
    this.medicalRecordForm = new FormGroup({
      petData: new FormGroup({
        name: new FormControl('', Validators.required),
        age: new FormControl('', Validators.required)
      }),
      ownerData: new FormGroup({
        ownerName: new FormControl('', [Validators.required, Validators.minLength(2)]),
        ownerLastName: new FormControl('', Validators.required)
      }),
      sterilized: new FormControl('', Validators.required)
    });
  }
}
