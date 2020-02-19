import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor() { }

  private formPets = [{
    name: "Nombre de la mascota",
    species: "Especie"
  }
  ]

  getForm(){
    return this.formPets;
  }

}
