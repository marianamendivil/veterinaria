import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.css']
})
export class VisitListComponent implements OnInit, OnDestroy {
  subscriptionKeyword: Subscription;
  visits: any[] = [];
  allVisits: any[] = [];

  constructor(private petsService: PetsService, private activatedRoute: ActivatedRoute, public auth: AuthService) { }

  ngOnInit() {
    this.petsService.getVisits().subscribe(resp => {
      console.log(resp);
      this.visits = resp;
      this.allVisits = this.visits;
    });

    this.subscriptionKeyword = this.petsService.getParams().subscribe(params => {
      if (params) {
        console.log('params ' + params);
        this.visits = this.allVisits.filter((pet) =>
          pet[params.option].toLowerCase().includes(params.keyword.toLowerCase()));
      }
    });
  }

  ngOnDestroy() {
    if (this.subscriptionKeyword) {
      this.subscriptionKeyword.unsubscribe();
    }
  }

}
