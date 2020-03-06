import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup } from '@angular/forms';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-pet-record',
  templateUrl: './pet-record.component.html',
  styleUrls: ['./pet-record.component.css']
})
export class PetRecordComponent implements OnInit {
  pet: any = {};
  petId: string;
  medicalRecordForm: FormGroup;
  visitForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private petsService: PetsService, private router: Router) {}

  setMedicalRecordForm(medical) {
    console.log(medical);
    this.medicalRecordForm = medical;
  }

  setVisitForm(visit) {
    console.log(visit);
    this.visitForm = visit;
  }

  ngOnInit() {
    this.petId = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.petId !== 'newPet') {
      this.petsService.getRecord(this.petId).subscribe((resp: any) => {
        console.log(resp);
        this.pet = resp;
        console.log(this.pet);

        //this.medicalRecordForm.setValue(this.pet);
        //this.visitForm.setValue(this.pet);
      });
    }


    /*this.petsService.getRecord(this.petId).subscribe(pet => {
      console.log(pet);
      this.pet = pet;
      console.log(this.pet);
      console.log(this.pet.visits);
    });
    console.log(this.pet);*/
  }

  deletePet() {
    this.petsService.deletePet(this.petId).subscribe();
    Swal.fire({
      title: 'Mascota eliminada',
      text: 'Eliminación exitosa',
      icon: 'success'
    });
    this.router.navigate(['/home']);
  }
}
