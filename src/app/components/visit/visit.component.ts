import { Component, Output, EventEmitter, OnInit } from '@angular/core';
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
  //@Output() visitFormChanged: EventEmitter<FormGroup>;
  visitForm: FormGroup;
  newVisit = false;
  pet: any = {};
  petId: string;

  constructor(private router: Router, private petsService: PetsService, private activatedRoute: ActivatedRoute) {
    this.petId = this.activatedRoute.snapshot.paramMap.get('id');
    //this.visitFormChanged = new EventEmitter();
  }

  ngOnInit() {
    let url = this.router.url;
    console.log(url);
    if (url == '/pets/new') {
      this.newVisit = true;
    }

    this.visitForm = new FormGroup({
      visits: new FormGroup({
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
      })
    });
  }

  setVisitForm() {
    //this.visitFormChanged.emit(this.visitForm);
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

    this.petsService.addVisit(this.visitForm.value, this.petId).subscribe(resp => {
      Swal.fire({
        title: 'Nueva visita agregada',
        text: 'Guardado exitosamente',
        icon: 'success'
      });
      console.log(resp);
    });
  }
}
