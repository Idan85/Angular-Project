const Rental = require('./models/rental');

class FakeDb {

    constructor() {

        this.rentals = [{

    category: 'Small Car',
    model: 'Suzuki Alto',
    company: 'Suzuki',    
    year: 2014,
    seats: 4,
    doors: 4,
    specificiations: 'Manual gearbox',
    dailyRate: 46,
    image: 'https://cdn2.rcstatic.com/images/car_images/new_images/suzuki/alto_lrg.jpg',
    pickup: 'Ben Gurion Airport, terminal 3',
    dropoff: 'Sde Dov Airport, Tel Aviv-Yafo'
  },

  {
  category: 'Small Car',
  model: 'Kia Picanto',
  company: 'Kia',    
  year: 2015,
  seats: 4,
  doors: 4,
  specificiations: 'Automatic gearbox',
  dailyRate: 95,
  image: 'https://cdn2.rcstatic.com/images/car_images/new_images/kia/picanto_5_door_lrg.jpg',
  pickup: 'Sde Dov Airport, Tel Aviv-Yafo',
  dropoff:'Ben Gurion Airport, terminal 3'
},

{
    category: 'Medium Car',
    model: 'Hyundai i25',
    company: 'Hyundai',
    year: 2017,
    seats: 5,
    doors: 4,
    specificiations: 'Automatic gearbox',
    dailyRate: 54,
    image: 'https://cdn2.rcstatic.com/images/car_images/new_images/hyundai/i25_accent_lrg.jpg',
    pickup: 'Ben Gurion Airport, terminal 3',
    dropoff: 'Sde Dov Airport, Tel Aviv-Yafo'
  },

  {
    category: 'Medium Car',
    model: 'Nissan Micra',
    company: 'Nissan',
    year: 2017,
    seats: 5,
    doors: 4,
    specificiations: 'Manual gearbox',
    dailyRate: 94,
    image: 'https://cdn2.rcstatic.com/images/car_images/new_images/nissan/micra_lrg.jpg',
    pickup: 'Sde Dov Airport, Tel Aviv-Yafo',
    dropoff: 'Ben Gurion Airport, terminal 3'
  },


  {
    category: 'Large Car',
    model: 'Mazda 6',
    company: 'Mazda',
    year: 2015,
    seats: 5,
    doors: 4,
    specificiations: 'Automatic gearbox',
    dailyRate: 78,
    image: 'https://cdn2.rcstatic.com/images/car_images/new_images/mazda/6_lrg.jpg',
    pickup: 'Ben Gurion Airport, terminal 3',
    dropoff: 'Sde Dov Airport, Tel Aviv-Yafo'
  },

  {
    category: 'Large Car',
    model: 'Subaru Impreza',
    company: 'Subaru',
    year: 2016,
    seats: 5,
    doors: 4,
    specificiations: 'Automatic gearbox',
    dailyRate: 123,
    image: 'https://cdn2.rcstatic.com/images/car_images/new_images/subaru/impreza_lrg.jpg',
    pickup: 'Sde Dov Airport, Tel Aviv-Yafo',
    dropoff: 'Ben Gurion Airport, terminal 3'
  },

  {
  category: 'People Carriers',
  model: 'Mazda 5',
  company: 'Mazda',
  year: 2014,
  seats: 7,
  doors: 4,
  specificiations: 'Automatic gearbox',
  dailyRate: 231,
  image: 'https://cdn2.rcstatic.com/images/car_images/new_images/mazda/5_lrg.jpg',
  pickup: 'Ben Gurion Airport, terminal 3',
  dropoff: 'Sde Dov Airport, Tel Aviv-Yafo'
  },

  {
  category: 'People Carriers',
  model: 'Citroen Berlingo',
  company: 'Citroen',
  year: 2012,
  seats: 7,
  doors: 4,
  specificiations: 'Manual gearbox',
  dailyRate: 205,
  image: 'https://cdn2.rcstatic.com/images/car_images/new_images/citroen/berlingo_lrg.jpg',
  pickup: 'Sde Dov Airport, Tel Aviv-Yafo',
  dropoff: 'Ben Gurion Airport, terminal 3' 
  },

    {
  category: 'SUV (sport utility vehicle)',
  model: 'Opel Mokka',
  company: 'Opel',
  year: 2013,
  seats: 5,
  doors: 4,
  specificiations: 'Automatic gearbox',
  dailyRate: 192,
  image: 'https://cdn2.rcstatic.com/images/car_images/new_images/opel/mokka_lrg.jpg',
  pickup: 'Ben Gurion Airport, terminal 3',
  dropoff: 'Sde Dov Airport, Tel Aviv-Yafo'
      },

    {
  category: 'SUV (sport utility vehicle)',
  model: 'Mitsubishi Outlander',
  company: 'Mitsubishi',
  year: 2015,
  seats: 7,
  doors: 4,
  specificiations: 'Automatic gearbox',
  dailyRate: 157,
  image: 'https://cdn2.rcstatic.com/images/car_images/new_images/mitsubishi/outlander_lrg.jpg',
  pickup: 'Sde Dov Airport, Tel Aviv-Yafo',
  dropoff: 'Ben Gurion Airport, terminal 3'
    }]
    }
   
async cleanDb() {

    await Rental.remove({});
}

pushRentalsToDb() {

    this.rentals.forEach ((rental) => {

        const newRental = new Rental (rental);

        newRental.save();
        
    })
}

seedDb() {

    this.cleanDb();

    this.pushRentalsToDb();
    }
}

module.exports = FakeDb;