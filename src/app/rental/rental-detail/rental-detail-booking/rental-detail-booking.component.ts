import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rental-detail-booking',
  templateUrl: './rental-detail-booking.component.html',
  styleUrls: ['./rental-detail-booking.component.css']
})
export class RentalDetailBookingComponent implements OnInit {

  @Input () price: number;

  public daterange: any = {};

  constructor() {

  }

  ngOnInit() {
  }

  public options: any = {

    locale: { format: 'YYYY-MM-DD' },

    alwaysShowCalendars: false,

    opens: 'left'
  };

  public selectedDate(value: any, datePicker?: any) {

    console.log (value);

    datePicker.start = value.start;

    datePicker.end = value.end;

    this.daterange.start = value.start;

    this.daterange.end = value.end;

    this.daterange.label = value.label;
  }
  }


