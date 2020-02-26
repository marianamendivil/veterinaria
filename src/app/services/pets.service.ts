import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  private url = 'https://veterinaria-de1d4.firebaseio.com';

  private pets: MedicalRecord[] = [
    {
      petData: {
        name: 'Sussie',
        age: 10,
        species: 'canino',
        race: 'schnauzer mini',
        gender: 'mujer',
        weight: 10,
        color: 'blanca',
        particularities: 'gorgeous and pretty :3'
      },
      ownerData: {
        ownerName: 'Gloria',
        ownerLastName: 'Dque',
        address: 'colombia',
        phone: 123456
      },
      id: '1'
    },
    {
      petData: {
        name: 'Princesa',
        age: 9,
        species: 'felino',
        race: 'gatita atigrada',
        gender: 'mujer',
        weight: 7,
        color: 'atigrada grisesita',
        particularities: 'hermosita'
      },
      ownerData: {
        ownerName: 'Mariana',
        ownerLastName: 'Mendivil',
        address: 'colombia',
        phone: 1234567
      },
      id: '2'
    },
    {
      petData: {
        name: 'Tony',
        age: 11,
        species: 'canino',
        race: 'french poodle',
        gender: 'hombre',
        weight: 8,
        color: 'negro',
        particularities: 'diabetes, ciego'
      },
      ownerData: {
        ownerName: 'Mariana',
        ownerLastName: 'Mendivil',
        address: 'colombia',
        phone: 1234567
      },
      id: '3'
    }
  ];

  constructor(private http: HttpClient) {}

  addRecord(medicalRecord: MedicalRecord) {
    return this.http.post(`${this.url}/historiaClinica.json`, medicalRecord).pipe(
      map((resp: any) => {
        medicalRecord.id = resp.name;
        return medicalRecord;
      })
    );
  }

  updateRecord(medicalRecord: MedicalRecord) {
    return this.http.put(`${this.url}/historiaClinica/${medicalRecord.id}.json`, medicalRecord);
  }

  /*getPets() {
    return this.pets;
  }*/

  getRecords() {
    return this.http.get(`${this.url}/historiaClinica.json`).pipe(map(this.makeArray));
  }

  getRecord(id: string) {
    return this.http.get(`${this.url}/historiaClinica.json`).pipe(map(this.makeArray))[id];
  }

  private makeArray(medicalRecordsObj: object) {
    const medicalRecords: MedicalRecord[] = [];

    if (medicalRecordsObj === null) {
      return [];
    }

    Object.keys(medicalRecordsObj).forEach(key => {
      const record: MedicalRecord = medicalRecordsObj[key];
      record.id = key;
      medicalRecords.push(record);
    })
    
    return medicalRecords;
  }
}

export interface MedicalRecord {
  petData: {
    name: string;
    age: number;
    species: string;
    race: string;
    gender: string;
    weight: number;
    color: string;
    particularities: string;
  };
  ownerData: {
    ownerName: string;
    ownerLastName: string;
    address: string;
    phone: number;
  };
  id: string;
}
