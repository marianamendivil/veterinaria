import { Component, OnInit } from '@angular/core';
import { Pet, PetsService } from '../../services/pets.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pets: Pet[] = [];

  constructor( private petsService: PetsService, public auth: AuthService ) { }

  ngOnInit() {
    this.pets = this.petsService.getPets();
  }

}
