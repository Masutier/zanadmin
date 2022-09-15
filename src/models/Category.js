
const mongoose = require('mongoose');
const {Schema} = mongoose;


const CategorySchema = new Schema ({
    slist1: { type: String, required:true }, // Tienda
    slist2: { type: String, required:true }, // Category old Familia
    linkslist2: { type: String, required:true }, // Link
    fotoslist2: { type: String, required:true }, // Foto Category
});


module.exports = mongoose.model('Category', CategorySchema);
