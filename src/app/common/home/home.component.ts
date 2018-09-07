import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// export class HomeComponent {


export class HomeComponent implements OnInit {

    loadedFeature = 'home';

  constructor() { }
  ngOnInit() {
  }

   onNavigate (feature: string) {

    this.loadedFeature = feature;
}
 }
