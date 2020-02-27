import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {

  visitForm: FormGroup;

  constructor() { 
    this.visitForm = new FormGroup({
      date: new FormControl('', Validators.required),
      cause: new FormControl('', Validators.required),
      patientHistory: new FormGroup({
        vaccines: new FormControl('', Validators.required),
        lastDeworming: new FormControl('', Validators.required),
        surgeries: new FormControl('', Validators.required)
      }),
      veterinary: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

}
