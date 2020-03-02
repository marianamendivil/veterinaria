import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  styleUrls: ['./medical-record.component.css']
})
export class MedicalRecordComponent {
  @Output() medicalRecordFormChanged: EventEmitter<FormGroup>;
  medicalRecordForm: FormGroup;

  constructor() {
    this.medicalRecordFormChanged = new EventEmitter();
    this.medicalRecordForm = new FormGroup({
      petData: new FormGroup({
        name: new FormControl('', Validators.required),
        age: new FormControl('', Validators.required),
        species: new FormControl('', Validators.required),
        race: new FormControl('', Validators.required),
        gender: new FormControl('', Validators.required),
        weight: new FormControl('', Validators.required),
        color: new FormControl('', Validators.required),
        particularities: new FormControl('', Validators.required),
      }),
      ownerData: new FormGroup({
        ownerName: new FormControl('', [Validators.required, Validators.minLength(2)]),
        ownerLastName: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required)
      }),
      sterilized: new FormControl('', Validators.required)
    });
  }


  setMedicalRecordForm() {
    this.medicalRecordFormChanged.emit(this.medicalRecordForm);
  }
}
