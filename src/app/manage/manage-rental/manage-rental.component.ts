import { Component, OnInit } from '@angular/core';

import { RentalService } from './../../rental/shared/rental.service';
import { Rental } from './../../rental/shared/rental.model';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-rental',
  templateUrl: './manage-rental.component.html',
  styleUrls: ['./manage-rental.component.css']
})
export class ManageRentalComponent implements OnInit {

  rentals: Rental [];

  rentalDeleteIndex: number;

  constructor ( private rentalService: RentalService,
                private toastr: ToastrService ) { }

  ngOnInit() {

    this.rentalService.getUserRentals().subscribe (

      ( rentals: Rental [] ) => {

        this.rentals = rentals;
      },

      () => {

      });
    }

    deleteRental ( rentalId: string ) {

      this.rentalService.deleteRental ( rentalId ).subscribe (

        () => {


          this.rentals.splice ( this.rentalDeleteIndex, 1 );

          this.rentalDeleteIndex = undefined;


        },

        ( ) => {
          this.toastr.error ( 'Cannot delete rental with active bookings!', 'Failed!' );

        });
    }
   }
