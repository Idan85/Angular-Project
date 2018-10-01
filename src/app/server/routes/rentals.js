const express = require ('express');

const router = express.Router();

const User = require('../models/user');

const Rental = require('../models/rental');

const { normalizeErrors } = require ( '../helpers/mongoose' );

const UserCtrl = require ('../controllers/user');

router.get ('/secret', UserCtrl.authMiddleware, function ( req, res ) {

    res.json ({ "secret": true });
});

router.get('/:id', function (req, res){

    const rentalId = req.params.id;

Rental.findById ( rentalId )

      .populate ( 'user', 'username -_id' )

      .populate ( 'bookings', 'startAt endAt -_id' )

      .exec ( function ( err, foundRental ) {

        if (err) {

            return res.status(422).send ({ errors: [{ title: 'Rental Error', detail: 'could not find Rental!'}]});
        }

         return res.json (foundRental);
      })
    });

router.post ( '', UserCtrl.authMiddleware, function ( req, res ){

    const { category, model, company, year, seats, doors, specificiations, dailyRate, image, pickup, dropoff } = req.body;

    const user = res.locals.user;

    const rental = new Rental ( { category, model, company, year, seats, doors, specificiations, dailyRate, image, pickup, dropoff });

    rental.user = user;

    Rental.create ( rental, function ( err, newRental){

        if ( err ) {

            return res.status ( 422 ).send ({ errors: normalizeErrors ( err.errors )});
        }

        User.update ({ _id: user.id }, { $push: { rentals: newRental }}, function () {});

        return res.json ( newRental );
    })

})

router.get ('', function ( req, res ) {

    const category = req.query.category;

    const query = category ? { category: category.toLowerCase () } : {};

    // if ( category ) {

    //     Rental.find ({ category: category.toLowerCase () })

    //           .select ( '-bookings' )

    //           .exec ( function ( err, filteredRentals ) { 

    // if ( err ) {

    //     return res.status ( 422 ).send ({ errors: normalizeErrors ( err.errors )});
    // }

    // if ( filteredRentals.length === 0 ) {

    //       return res.status(422).send ({ errors: [{ title: 'No Rental Found', detail: `There are no rentals for category ${ category }`}]});
    // }

    // return res.json ( filteredRentals );

    //           })
    // } else {

    Rental.find ( query )

          .select ( '-bookings' )

          .exec ( function ( err, foundRentals ) { 

    if ( err ) {

          return res.status ( 422 ).send ({ errors: normalizeErrors ( err.errors )});

               }
        
    if ( category && foundRentals.length === 0 ) {
        
          return res.status(422).send ({ errors: [{ title: 'No Rentals Found', detail: `There are no rentals for category ${ category }`}]});

        }                               

        return res.json ( foundRentals );
    })
}
    /* res.json ({'ok': true}); */
);    

module.exports = router;