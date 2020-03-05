import { Component, OnInit } from '@angular/core';
import { MedicalRecord, PetsService } from '../../services/pets.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pets: MedicalRecord[] = [];

  constructor( private petsService: PetsService, private router: Router ,public auth: AuthService ) { }

  ngOnInit() {
    //this.pets = this.petsService.getPets();
    this.petsService.getRecords().subscribe(resp => {
      console.log(resp);
      this.pets = resp;
    });
  }

  openPet(id: number){
    console.log(id);

    this.router.navigate(['/petRecord',id]);
  }

}
