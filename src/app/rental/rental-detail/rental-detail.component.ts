import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from './../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {

  /* currentId: string; */

  rental: Rental;

  constructor(private route: ActivatedRoute,
              // tslint:disable-next-line:no-shadowed-variable
              private RentalService: RentalService ) {
               }

  ngOnInit() {
    /* this.rental = new Rental(); */

    this.route.params.subscribe(
      (params) => {
       /*  this.currentId = params['rentalId']; */
       this.getRental(params['rentalId']);
      });
  }

  getRental(rentalId: string) {
    this.RentalService.getRentalById(rentalId).subscribe(
      (rental: Rental) => {
        this.rental = rental;
      });
  }
}
