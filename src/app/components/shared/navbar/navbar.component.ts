import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { PetsService, MedicalRecord } from 'src/app/services/pets.service';
import { filter } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  valOptPets = [];

  /*optionsPets = {
    name: 'Nombre',
    species: 'Especie',
    age: 'Edad'
  }*/

  optionsPets = [
    { value: 'name', label: 'Nombre'},
    { value: 'species', label: 'Especie'},
    { value: 'age', label: 'Edad'}
  ];

  optionsVisits = [
    { value: 'date', label: 'Fecha'},
    { value: 'veterinary', label: 'Veterinario'},
    { value: 'cause', label: 'Causa'},
  ];

  href = '';
  pets: any[] = [];
  dropdownOptions: any;
  optionSelected = '';

  constructor(public auth: AuthService, private router: Router, private activatedRoute: ActivatedRoute, private petsService: PetsService) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        console.log(event.url);
        this.href = event.url;
        if (this.href.includes('/pets')) {
          this.dropdownOptions = this.optionsPets;
          console.log(this.dropdownOptions);
        } else if (this.href.includes('/visits')) {
          this.dropdownOptions = this.optionsVisits;
          console.log(this.dropdownOptions);
        }
      });
  }

  searchPets( keyword: string, option: string ) {
    this.petsService.sendParams({ keyword, option });
    /*if (this.href.includes('/pets')) {
      this.router.navigate(['/pets'], { queryParams: { keyword, option } });
    } else if (this.href.includes('/visits')) {
      this.router.navigate(['/visits'], { queryParams: { keyword, option } });
    }*/

    /*this.petsService.getRecords().subscribe(resp => {
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
    //this.petsService.searchPets(keyWord)*/
  }
}
