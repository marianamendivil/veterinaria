import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PetsService } from 'src/app/services/pets.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {
  newPet: FormGroup;
  //visitForm: FormGroup;

  constructor(private petsService: PetsService, private router: Router) {}

  ngOnInit() {
    this.newPet = new FormGroup({})
  }

  /*setMedicalRecordForm(medical) {
    console.log(medical);
    this.medicalRecordForm = medical;
  }

  setVisitForm(visit) {
    console.log(visit);
    this.visitForm = visit;
  }*/

  saveChanges() {
    const newPet = Object.assign(this.newPet.get('medicalRecordForm').value, this.newPet.get('visitForm').value);

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

    this.petsService.addRecord(newPet).subscribe(resp => {
      Swal.fire({
        title: 'Registro guardado exitosamente',
        text: this.newPet.get('medicalRecordForm').value.petData.name,
        icon: 'success'
      });
      console.log(resp);
      this.newPet.reset();
      this.router.navigate(['/pets']);
    });
  }
}
