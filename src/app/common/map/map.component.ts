import { Component, Input, ChangeDetectorRef } from '@angular/core';

import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  {

  @Input () location: string;

  // tslint:disable-next-line:no-inferrable-types
  isPositionError: boolean = false;

  lat: number;

  lng: number;

  constructor (private mapService: MapService,
               private ref: ChangeDetectorRef ) { }

  // ngOnInit() {
  // }

  mapReadyHandler () {

    // let currentLocation = this.location;

    // if (Math.round (Math.random() * 10) * 5) {

    //   currentLocation = 'sadad78asd6a87d';
    // }

    this.mapService.getGeoLocation (this.location).subscribe (

      ( coordinates ) => {

        this.lat = coordinates.lat;

        this.lng = coordinates.lng;

        this.ref.detectChanges();

      }, () => {

        this.isPositionError = true;
      });
      }
  }
