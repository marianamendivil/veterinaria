import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent implements OnInit {

  @Input() pet: any = {};
  @Input() id: string;

  @Output() petSelected: EventEmitter<string>;

  constructor(private router: Router, private petsService: PetsService) {
    this.petSelected = new EventEmitter();
  }

  ngOnInit() {
    //let petPhoto = this.petsService.getPhoto().subscribe();
    //console.log(petPhoto);
  }

  openPet(){
    console.log(this.id);
    console.log(this.pet);
    console.log(this.petSelected);

    this.router.navigate(['/petRecord', this.pet.id]);
  }

  openVisit(){
    this.router.navigate(['/visit', this.pet.id]);
  }
}
