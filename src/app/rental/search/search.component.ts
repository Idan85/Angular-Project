import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() rental: any;

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
