import { Component, OnInit, Input  } from '@angular/core';

import { Rental } from '../shared/rental.model';

import { ActivatedRoute } from '@angular/router';

import { RentalService } from '../shared/rental.service';

import { HelperService } from '../../common/service/helper.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() rental: any;

  isShow = false;

  newRental: Rental;

  dropdownList = [];

  selectedItems = [];


  dropdownList1 = [];

  selectedItems1 = [];


  dropdownList2 = [];

  selectedItems2 = [];


  dropdownList3 = [];

  selectedItems3 = [];


  dropdownSettings = {};

  constructor ( public route: ActivatedRoute,
    // tslint:disable-next-line:no-shadowed-variable
               public RentalService: RentalService,
               private helper: HelperService ) {

  }

ngOnInit() {

this.newRental = new Rental ();

this.dropdownList = [
                    { item_id: 1, item_text: 'Automatic Gearbox' },
                    { item_id: 2, item_text: 'Manual Gearbox' },
                    ],

this.selectedItems = [
                     { item_id: 1, item_text: 'Automatic Gearbox' },
                     { item_id: 2, item_text: 'Manual Gearbox' }
                     ],

this.dropdownList1 = [
                    { item_id: 1, item_text: '2012' },
                    { item_id: 2, item_text: '2013' },
                    { item_id: 3, item_text: '2014' },
                    { item_id: 4, item_text: '2015' },
                    { item_id: 5, item_text: '2016' },
                    { item_id: 6, item_text: '2017' }
                     ],

this.selectedItems1 = [
                    { item_id: 1, item_text: '2012' },
                    { item_id: 2, item_text: '2013' },
                    { item_id: 3, item_text: '2014' },
                    { item_id: 4, item_text: '2015' },
                    { item_id: 5, item_text: '2016' },
                    { item_id: 6, item_text: '2017' }
                    ],

this.dropdownList2 = [
                    { item_id: 1, item_text: 'Citroen' },
                    { item_id: 2, item_text: 'Hyundai' },
                    { item_id: 3, item_text: 'Kia' },
                    { item_id: 4, item_text: 'Mazda' },
                    { item_id: 5, item_text: 'Mitsubishi' },
                    { item_id: 6, item_text: 'Nissan' },
                    { item_id: 7, item_text: 'Opel' },
                    { item_id: 8, item_text: 'Subaru' },
                    { item_id: 9, item_text: 'Suzuki' }
                    ],

this.selectedItems2 = [
                    { item_id: 1, item_text: 'Citroen' },
                    { item_id: 2, item_text: 'Hyundai' },
                    { item_id: 3, item_text: 'Kia' },
                    { item_id: 4, item_text: 'Mazda' },
                    { item_id: 5, item_text: 'Mitsubishi' },
                    { item_id: 6, item_text: 'Nissan' },
                    { item_id: 7, item_text: 'Opel' },
                    { item_id: 8, item_text: 'Subaru' },
                    { item_id: 9, item_text: 'Suzuki' }
                      ],

this.dropdownList3 = [
                    { item_id: 1, item_text: 'Citroen Berlingo' },
                    { item_id: 2, item_text: 'Hyundai i25' },
                    { item_id: 3, item_text: 'Kia Picanto' },
                    { item_id: 4, item_text: 'Mazda 5' },
                    { item_id: 5, item_text: 'Mazda 6' },
                    { item_id: 6, item_text: 'Mitsubishi Outlander' },
                    { item_id: 7, item_text: 'Nissan Micra' },
                    { item_id: 8, item_text: 'Mokka' },
                    { item_id: 9, item_text: 'Subaru Impreza' },
                    { item_id: 10, item_text: 'Suzuki Alto' }
                     ],

this.selectedItems3 = [
                      { item_id: 1, item_text: 'Citroen Berlingo' },
                      { item_id: 2, item_text: 'Hyundai i25' },
                      { item_id: 3, item_text: 'Kia Picanto' },
                      { item_id: 4, item_text: 'Mazda 5' },
                      { item_id: 5, item_text: 'Mazda 6' },
                      { item_id: 6, item_text: 'Mitsubishi Outlander' },
                      { item_id: 7, item_text: 'Nissan Micra' },
                      { item_id: 8, item_text: 'Mokka' },
                      { item_id: 9, item_text: 'Subaru Impreza' },
                      { item_id: 10, item_text: 'Suzuki Alto' }
                      ],

this.dropdownSettings = {
                            singleSelection: false,
                            idField: 'item_id',
                            textField: 'item_text',
                            selectAllText: 'Select All',
                            unSelectAllText: 'UnSelect All',
                            itemsShowLimit: 5,
                            allowSearchFilter: true

                          };

this.route.params.subscribe(
    (params) => { this.getRental(params['rentalId']);
  });
}


getRental(rentalId: string) {
          this.RentalService.getRentalById(rentalId).subscribe(
        (rental: Rental) => { this.rental = rental;
                          });
}

onItemSelect (item: any ) {
                           console.log(item);
}

onSelectAll (items: any) {
                          console.log(items);
}

createRental () {

  console.log ( this.newRental );

}
}

export class AppSearch {}








