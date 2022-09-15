
const mongoose = require('mongoose');
const {Schema} = mongoose;


const CartSchema = new Schema ({
    status: { type: String },
    qty: { type: Number },
    prodid: { type: String },
    user: { type: String },
    date: { type: Date, default: Date.now },
    confdate: { type: String },
    sentdate: { type: String },
    paydate: { type: String }
});


module.exports = mongoose.model('Cart', CartSchema);
