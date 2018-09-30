const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema ({

    startAt: { type: Date, required: 'Starting date is required' },
    endAt: { type: Date, required: 'Ending date is required' },
    category: { type: String, max: [ 128, 'Too long, max is 128 characters']},
    model: { type: String, lowercase: true },
    company: { type: String,  min: [4, 'Too short, min is 4 characters'] },
    year: Number, 
    pickup: { type: String},
    dropoff: { type: String},
    totalPrice: Number,
    days: Number,
    createdAt: { type: Date, default: Date.now },
    
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    rental: { type: Schema.Types.ObjectId, ref: 'Rental' }
});

module.exports = mongoose.model('Booking', bookingSchema );