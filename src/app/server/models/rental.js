const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const rentalSchema = new Schema ({

    category: { type: String, required: true, max: [ 128, 'Too long, max is 128 characters']},
    model: { type: String, required: true, lowercase: true },
    company: { type: String, required: true, min: [4, 'Too short, min is 4 characters'] },
    // city: { type: String, required: true, min: [4, 'Too short, min is 4 characters'] },
   /*  street: { type: String, required: true, min: [4, 'Too short, min is 4 characters'] }, */
    pickup: { type: String, required: true, min: [4, 'Too short, min is 4 characters'] },  
    // dropoff: { type: String, required: true, min: [4, 'Too short, min is 4 characters'] }, 
    year: Number, 
    seats: Number, 
    doors: Number,
    specificiations: { type: String, required: true, lowercase: true },
    dailyRate: Number,
    image: { type: String, required: true },

    user: [{ type: Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Rental', rentalSchema );

