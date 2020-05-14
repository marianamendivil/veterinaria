import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  private url = 'https://veterinaria-de1d4.firebaseio.com';
  private photoUrl = 'https://firebasestorage.googleapis.com/v0/b/veterinaria-de1d4.appspot.com/o';
  private invocation = new XMLHttpRequest();
  private subjectParams = new Subject<any>();

  constructor(private http: HttpClient) {}

  sendParams(params: any) {
    this.subjectParams.next(params);
  }

  getParams(): Observable<any> {
    return this.subjectParams.asObservable();
  }

  addRecord(medicalRecord: MedicalRecord) {
    return this.http.post(`${this.url}/historiaClinica.json`, medicalRecord).pipe(
      map((resp: any) => {
        medicalRecord.id = resp.name;
        return medicalRecord;
      })
    );
  }

  deletePet(id: string) {
    return this.http.delete(`${this.url}/historiaClinica/${id}.json`);
  }

  addVisit(visit: Visits) {
    return this.http.post(`${this.url}/visitas.json`, visit).pipe(
      map((resp: any) => {
        visit.id = resp.name;
        return visit;
      })
    );
  }

  addNewVisit(visit: Visits, id: string) {
    return this.http.post(`${this.url}/visitas/${id}.json`, visit).pipe(
      map((resp: any) => {
        visit.id = resp.name;
        return visit;
      })
    );
  }

  updateRecord(medicalRecord: MedicalRecord) {
    return this.http.put(`${this.url}/historiaClinica/${medicalRecord.id}.json`, medicalRecord);
  }

  getRecords() {
    return this.http.get(`${this.url}/historiaClinica.json`).pipe(map(this.makeArray));
  }

  getVisits() {
    return this.http.get(`${this.url}/visitas.json`).pipe(map(this.makeArray));
  }

  getRecord(id: string) {
    return this.http.get(`${this.url}/historiaClinica/${id}.json`);
  }

  getPhoto() {
    // return this.http.get(`${this.photoUrl}/pepe.jpg?alt=media&token=0dde4633-b2ce-4b34-9334-67d6a1d9184f`);
  }
  /*callOtherDomain() {
    if(this.invocation) {
      this.invocation.open('GET', this.photoUrl, true);
      this.invocation.onreadystatechange = handler;
      this.invocation.send();
    }
  }*/

  private makeArray(medicalRecordsObj: object) {
    const medicalRecords: MedicalRecord[] = [];

    if (medicalRecordsObj === null) {
      return [];
    }

    Object.keys(medicalRecordsObj).forEach(key => {
      const record: MedicalRecord = medicalRecordsObj[key];
      record.id = key;
      medicalRecords.push(record);
    });

    return medicalRecords;
  }
}

export interface MedicalRecord {
  petData: PetData;
  ownerData: OwnerData;
  id: string;
}

export interface OwnerData {
  ownerData: {
    ownerName: string;
    ownerLastName: string;
    address: string;
    phone: number;
  };
}

export interface PetData {
  petData: {
    name: string;
    age: number;
    species: string;
    race: string;
    gender: string;
    weight: number;
    color: string;
    particularities: string;
    sterilized: boolean;
  };
}

export interface Visits {
  date: Date;
  cause: string;
  patientHistory: {
    vaccines: string;
    lastDeworming: string;
    surgeries: string;
  };
  veterinary: string;
  id: string;
  petId: string;
}
