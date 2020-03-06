import { Component, OnInit } from '@angular/core';
import { PetsService, MedicalRecord } from 'src/app/services/pets.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
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
