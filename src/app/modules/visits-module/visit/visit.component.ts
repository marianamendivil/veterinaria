import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PetsService } from 'src/app/services/pets.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {
  @Input() newPetForm: FormGroup;
  visitForm: FormGroup;
  newVisit = false;
  pet: any = {};
  petId: string;
  visitId: any[] = [];
  visitPet: any[] = [];

  constructor(private router: Router, private petsService: PetsService, private activatedRoute: ActivatedRoute) {
    this.petId = this.activatedRoute.snapshot.paramMap.get('id');
    // this.visitFormChanged = new EventEmitter();
  }

  ngOnInit() {
    const url = this.router.url;
    console.log(url);
    if (url === '/pets/new') {
      this.newVisit = true;
    }

    this.visitForm = new FormGroup({
        date: new FormControl('', Validators.required),
        cause: new FormControl('', Validators.required),
        patientHistory: new FormGroup({
          vaccines: new FormControl('', Validators.required),
          lastDeworming: new FormControl('', Validators.required),
          surgeries: new FormControl('', Validators.required),
          treatment: new FormControl('', Validators.required)
        }),
        veterinary: new FormControl('', Validators.required),
        visitId: new FormControl(this.petId)
      });
    if (this.newVisit) {
      this.newPetForm.addControl('visitForm', this.visitForm);
    }
  }

  saveVisitChanges() {

    console.log(this.visitForm.value);

    if (this.visitForm.invalid) {
      console.log('Form no valido');
      return;
    }

    /*if (this.medicalRecordForm.value.id) {
      this.petsService.updateRecord(this.medicalRecordForm.value).subscribe(resp => {
        console.log(resp);
      });
    } else {
    }*/

    this.petsService.getVisits().subscribe(resp => {
      console.log(resp);
      this.visitId = resp;
      this.visitPet = this.visitId.filter(visit => visit.petId.includes(this.petId));
      console.log(this.visitPet[0].id);
      this.petsService.addNewVisit(this.visitForm.value, this.visitPet[0].id).subscribe(resp => {
        Swal.fire({
          title: 'Nueva visita agregada',
          text: 'Guardado exitosamente',
          icon: 'success'
        });
        this.visitForm.reset();
        this.router.navigate(['/pets']);
        console.log(resp);
      });
    });

  }
}
