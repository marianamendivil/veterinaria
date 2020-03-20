import { Component, OnInit, Input } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.css']
})
export class VisitListComponent implements OnInit {

  visits: any[] = [];
  allVisits: any[] = [];

  constructor(private petsService: PetsService, private activatedRoute:ActivatedRoute, public auth: AuthService) { }

  ngOnInit() {
    this.petsService.getVisits().subscribe(resp => {
      console.log(resp);
      this.visits = resp;
      this.allVisits = this.visits;
    });

    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
        this.visits = this.allVisits.filter((pet) =>
          pet[params.option].toLowerCase().includes(params.keyword.toLowerCase()));
      }
    );
  }

}
