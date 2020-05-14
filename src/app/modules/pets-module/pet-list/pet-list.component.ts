import { Component, OnInit, OnDestroy } from '@angular/core';
import { PetsService, MedicalRecord } from 'src/app/services/pets.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetsComponent implements OnInit, OnDestroy {
  subscriptionKeyword: Subscription;
  pets: any[] = [];
  allPets: any[] = [];

  constructor( private petsService: PetsService, private activatedRoute: ActivatedRoute ,
               private router: Router , public auth: AuthService ) {}

  ngOnInit() {
    this.petsService.getRecords().subscribe(resp => {
      console.log(resp);
      this.pets = resp;
      this.allPets = this.pets;
    });

    this.subscriptionKeyword = this.petsService.getParams().subscribe(params => {
      if (params) {
        console.log('params ' + params);
        this.pets = this.allPets.filter((pet) =>
          pet.petData[params.option].toLowerCase().includes(params.keyword.toLowerCase()));
      }
    });
  }

  ngOnDestroy() {
    if (this.subscriptionKeyword) {
      this.subscriptionKeyword.unsubscribe();
    }
  }

  openPet(id: number) {
    console.log(id);
    this.router.navigate(['/petRecord', id]);
  }

}
