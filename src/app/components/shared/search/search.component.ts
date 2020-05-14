import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  pets: any[] = [];

  constructor(private router: Router, private petsService: PetsService) { }

  ngOnInit() {
  }

  searchPets( keyword: string ) {
    console.log(keyword);
    this.router.navigate(['/pets'], { queryParams: { keyword } });

    this.petsService.getRecords().subscribe(resp => {
      console.log(resp);
      this.pets = resp;
      console.log(this.pets.filter(pet => pet.petData.name.toLowerCase().includes(keyword.toLowerCase())));
      console.log(this.pets.find(pet => pet.petData.species.includes(keyword)));
      // console.log(this.pets.find(pet => pet.petData.age.includes(parseInt(keyword))));
      console.log(this.pets.find(pet => pet.ownerData.ownerName.includes(keyword)));
      console.log(this.pets.find(pet => pet.ownerData.ownerLastName.includes(keyword)));
    }); // Crear un arreglo de petstoshow y ahi poner la funcion filter
    // let a = this.pets.forEach((pet) => pet.petData.name.toLowerCase());
    // console.log(a);
    // this.petsService.searchPets(keyWord)
  }

}
