import { Component, OnInit } from '@angular/core';
import { PetsService, MedicalRecord } from 'src/app/services/pets.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetsComponent implements OnInit {

  pets: any[] = [];
  allPets: any[] = [];

  constructor( private petsService: PetsService, private activatedRoute:ActivatedRoute , private router: Router ,public auth: AuthService ) { }
  ngOnInit() {

    this.petsService.getRecords().subscribe(resp => {
      console.log(resp);
      this.pets = resp;
      this.allPets = this.pets;
    });

    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      if(params.option === "age") {
        this.pets = this.allPets.filter((pet) =>
          pet.petData[params.option] === parseInt(params.keyword));
      } else {
        this.pets = this.allPets.filter((pet) =>
          pet.petData[params.option].toLowerCase().includes(params.keyword.toLowerCase()));
        }
      }
    );

  }

  openPet(id: number){
    console.log(id);
    this.router.navigate(['/petRecord',id]);
  }

}
