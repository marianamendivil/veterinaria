import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  private pets: Pet[] = [
    {
      ownerName: "Gloria",
      ownerLastName: "Dque",
      address: "colombia",
      phone: 123456,
        name: "Sussie",
        age: 10,
        species: "canino",
        race: "schnauzer mini",
        gender: "mujer",
        weight: 10,
        color: "blanca",
        particularities: "gorgeous and pretty :3"
    },
    {
      ownerName: "Mariana",
      ownerLastName: "Mendivil",
      address: "colombia",
      phone: 1234567,
        name: "Princesa",
        age: 9,
        species: "felino",
        race: "gatita atigrada",
        gender: "mujer",
        weight: 7,
        color: "atigrada grisesita",
        particularities: "hermosita"
    },
    {
      ownerName: "Mariana",
      ownerLastName: "Mendivil",
      address: "colombia",
      phone: 1234567,
        name: "Tony",
        age: 11,
        species: "canino",
        race: "french poodle",
        gender: "hombre",
        weight: 8,
        color: "negro",
        particularities: "diabetes, ciego"
    }
  ];

  constructor() { }

  getPets(){
    return this.pets;
  }
}

export interface Pet{
  ownerName: string;
  ownerLastName: string;
  address: string;
  phone: number;
    name: string;
    age: number;
    species: string;
    race: string;
    gender: string;
    weight: number;
    color: string;
    particularities: string;
    idx?: number;
}


