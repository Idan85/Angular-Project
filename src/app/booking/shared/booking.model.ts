import { Rental } from './../../rental/shared/rental.model';

export class Booking {

    static readonly DATE_FORMAT = 'Y/MM/DD';

    _id: string;
    startAt: string;
    endAt: string;
    totalPrice: number;
    days: number;
    createdAt: string;
    category: string;
    model: string;
    company: string;
    pickup: string;
    dropoff: string;
    year: number;

    rental: Rental;
}
