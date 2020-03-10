import { Component, OnInit, Input } from '@angular/core';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit {
  @Input() asdf = '/home';
  backButton = false;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    let url = this.router.url;
    console.log(url);

    /*if (url == '/pets' |) {
      this.backButton = true;
    }*/
  }

  // faArrowAltCircleLeft = faArrowAltCircleLeft;

}
