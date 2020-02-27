import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent implements OnInit {

  @Input() pet: any = {};
  @Input() id: string;

  @Output() petSelected: EventEmitter<string>;

  constructor(private router: Router) {
    this.petSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  openPet(){
    console.log(this.id);
    this.router.navigate(['/petRecord', this.id]);
  }

  openVisit(){
    this.router.navigate(['/visit']);
  }
}
