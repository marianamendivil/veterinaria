import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { PetsService, MedicalRecord } from 'src/app/services/pets.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  pets: any[] = [];

  constructor(public auth: AuthService, private router: Router, private petsService: PetsService) { }

  ngOnInit() {
  }

  searchPets( keyword: string ){
    console.log(keyword);
    this.router.navigate(['/pets'],{ queryParams: { keyword } });

    this.petsService.getRecords().subscribe(resp => {
      console.log(resp);
      this.pets = resp;
      console.log(this.pets.filter(pet => pet.petData.name.toLowerCase().includes(keyword.toLowerCase())));
      console.log(this.pets.find(pet => pet.petData.species.includes(keyword)));
      //console.log(this.pets.find(pet => pet.petData.age.includes(parseInt(keyword))));
      console.log(this.pets.find(pet => pet.ownerData.ownerName.includes(keyword)));
      console.log(this.pets.find(pet => pet.ownerData.ownerLastName.includes(keyword)));
    }); //Crear un arreglo de petstoshow y ahi poner la funcion filter
    //let a = this.pets.forEach((pet) => pet.petData.name.toLowerCase());
    //console.log(a);
    //this.petsService.searchPets(keyWord)
  }
}
