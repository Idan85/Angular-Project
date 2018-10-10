const express = require ('express');
const mongoose = require('mongoose');

const config = require('./config/dev');
const FakeDb = require('./fake-db');

const bodyParser = require('body-parser');

const Rental = require('./models/rental');


const rentalRoutes = require('./routes/rentals'),

      userRoutes = require('./routes/users'),
       
      bookingRoutes = require('./routes/bookings'),
      
      imageUploadRoutes = require('./routes/image-upload');

mongoose.connect(config.DB_URI, {useNewUrlParser: true }).then(() => {
    
    const fakeDb = new FakeDb();

    //fakeDb.seedDb();
});

const app = express();

app.use(bodyParser.json());

app.use('/api/v1/rentals', rentalRoutes);

app.use('/api/v1/users', userRoutes);

app.use('/api/v1/bookings', bookingRoutes);

app.use('/api/v1', imageUploadRoutes);

// app.get('/rentals', function(req, res) {
//     res.json({'success': true});
// });

const PORT = process.env.PORT || 3001;

app.listen (PORT, function(){ 

    console.log("App is running!");
})