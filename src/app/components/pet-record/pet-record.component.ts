import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetsService } from '../../services/pets.service';

@Component({
  selector: 'app-pet-record',
  templateUrl: './pet-record.component.html',
  styleUrls: ['./pet-record.component.css']
})
export class PetRecordComponent implements OnInit {

  pet: any = {};

  constructor(private activatedRoute: ActivatedRoute, private petsService: PetsService) { 
    this.activatedRoute.params.subscribe(params => {
      this.pet = this.petsService.getRecord(params['id']);
      console.log('holaa'+this.pet);
      
    })
  }

  ngOnInit() {
  }

}
