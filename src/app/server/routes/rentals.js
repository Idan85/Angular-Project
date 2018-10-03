const express = require ('express');

const router = express.Router();

const User = require('../models/user');

const Rental = require('../models/rental');

const { normalizeErrors } = require ( '../helpers/mongoose' );

const UserCtrl = require ('../controllers/user');

router.get ('/secret', UserCtrl.authMiddleware, function ( req, res ) {

    res.json ({ "secret": true });
});

router.get ( '/manage', UserCtrl.authMiddleware, function ( req, res ) {

    const user = res.locals.user;
    
    Rental 
          .where ({ user })
          .populate ( 'bookings' )
          .exec ( function ( err, foundRenatls ) {
              
            if ( err ) {

                return res.status ( 422 ).send ({ errors: normalizeErrors ( err.errors )});
            }

            return res.json ( foundRenatls );
           }) 
          })

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

router.delete ( '/:id', UserCtrl.authMiddleware, function ( req, res ) {

    const user = res.locals.user;

    Rental.findById ( req.params.id )
          .populate ( 'user', '_id' )
          .populate({
                     path: 'bookings',
                     select: 'startAt',
                     match: { startAt: { $gt: new Date ()}}
          })
           .exec ( function ( err, foundRental) {

            if ( err ) {

                return res.status ( 422 ).send ({ errors: normalizeErrors ( err.errors )});
            }

            if ( user.id !== foundRental.user.id ) {

                return res.status(422).send ({ errors: [{ title: 'Invalid User!', detail: 'You are not rental owner!'}]});
            }

            if ( foundRental.bookings.length > 0 ) {

                return res.status(422).send ({ errors: [{ title: 'Active Bookings!', detail: 'Cannot delete rental with active booking!'}]});

            }

            foundRenatl.remove ( function ( err ) {

                if ( err ) {

                    return res.status ( 422 ).send ({ errors: normalizeErrors ( err.errors )});
                }

                return res.json ({ 'status': 'deleted' });
            })
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