const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const rentalSchema = new Schema ({

    category: { type: String, required: true, lowercase: true,  max: [ 128, 'Too long, max is 128 characters']},
    model: { type: String, required: true, lowercase: true },
    company: { type: String, required: true, min: [4, 'Too short, min is 4 characters'] },
    // city: { type: String, required: true, min: [4, 'Too short, min is 4 characters'] },
   /*  street: { type: String, required: true, min: [4, 'Too short, min is 4 characters'] }, */
    pickup: { type: String},  
    dropoff: { type: String}, 
    year: { type: Number, required: true},
    seats: { type: Number, required: true},
    doors: { type: Number, required: true},
    specificiations: { type: String, required: true, lowercase: true },
    dailyRate: Number,
    image: { type: String, required: true, lowercase: true },
    createdAt: { type: Date, default: Date.now },
    smallbags: { type: Number },
    largebags: { type: Number },
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking'}]
});

module.exports = mongoose.model('Rental', rentalSchema );

