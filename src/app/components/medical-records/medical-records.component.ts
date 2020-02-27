import { Component, OnInit, Input } from '@angular/core';
import { PetsService } from '../../services/pets.service';
import Swal from 'sweetalert2';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.css']
})
export class MedicalRecordsComponent implements OnInit {

  @Input() medicalRecordForm: FormGroup;

  constructor(private petsService: PetsService) {
    console.log(this.medicalRecordForm);
  }

  ngOnInit() {
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
