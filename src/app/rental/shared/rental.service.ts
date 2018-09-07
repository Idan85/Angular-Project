import { Injectable } from '@angular/core';

// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

import { Rental } from './rental.model';

import { HttpClient } from '@angular/common/http';

@Injectable ()

export class RentalService {

    constructor (private http: HttpClient) {}

//    private rentals: Rental[] = [{
//     id: '1',
//     category: 'Small Car',
//     model: 'Suzuki Alto',
//     company: 'Suzuki',
//     year: 2014,
//     seats: 4,
//     doors: 4,
//     specificiations: 'Manual gearbox',
//     dailyRate: 46,
//     image: 'https://cdn2.rcstatic.com/images/car_images/new_images/suzuki/alto_lrg.jpg',
//   },
// {
//     id: '2',
//     category: 'Medium Car',
//     model: 'Hyundai i25',
//     company: 'Hyundai',
//     year: 2017,
//     seats: 5,
//     doors: 4,
//     specificiations: 'Automatic gearbox',
//     dailyRate: 54,
//     image: 'https://cdn2.rcstatic.com/images/car_images/new_images/hyundai/i25_accent_lrg.jpg',
//   },
//   {
//     id: '3',
//     category: 'Large Car',
//     model: 'Mazda 6',
//     company: 'Mazda',
//     year: 2015,
//     seats: 5,
//     doors: 4,
//     specificiations: 'Automatic gearbox',
//     dailyRate: 78,
//     image: 'https://cdn2.rcstatic.com/images/car_images/new_images/mazda/6_lrg.jpg',
//   },
//   {
//   id: '4',
//   category: 'People Carriers',
//   model: 'Toyota Verso',
//   company: 'Toyota',
//   year: 2010,
//   seats: 5,
//   doors: 5,
//   specificiations: 'Manual gearbox',
//   dailyRate: 169,
//   image: 'https://cdn2.rcstatic.com/images/car_images/new_images/toyota/verso_lrg.jpg',
//   },
//   {
//     id: '5',
//     category: 'SUV (sport utility vehicle)',
//     model: 'Subaru XV',
//     company: 'Subaru',
//     year: 2017,
//     seats: 5,
//     doors: 5,
//     specificiations: 'Automatic gearbox',
//     dailyRate: 189,
//     image: 'https://cdn2.rcstatic.com/images/car_images/new_images/subaru/xv_lrg.jpg',
// }];

public getRentalById(rentalId: string): Observable<any> {

    return this.http.get ('/api/v1/rentals/' + rentalId);

/*     return new Observable<Rental>((observer) => {

    setTimeout(() => {
        const foundRental = this.rentals.find((rental) => {
            return rental.id === rentalId;
        });

        observer.next(foundRental);
        }, 500);
        }); */
    }

public getRentals(): Observable<any> {

    return this.http.get ('/api/v1/rentals');

   /*  return new Observable <Rental[]> (( observer ) => { */

    /* const rentalObservable: Observable <Rental[]> = new Observable (( observer ) => { */

/*         setTimeout (() => {

            observer.next(this.rentals);

        }, 1000); */

/*         setTimeout (() => {

            observer.error('I AM ERROR');

        }, 2000);

        setTimeout (() => {

            observer.complete();

        }, 3000); */

    /* }); */

   /*  return rentalObservable; */
}
}
