
const mongoose = require('mongoose');
const {Schema} = mongoose;

const Encuesta1Schema = new Schema ({
    q1: { type: String },
    q2: { type: String },
    q3: { type: String },
    q4: { type: String },
    q5: { type: String },
    q6: { type: String },
    q7: { type: String },
    q8: { type: String },
    q9: { type: String },
    q10: { type: String },
    q11: { type: String },
    newDate: { type: String }
});


module.exports = mongoose.model('Encuesta1', Encuesta1Schema)
