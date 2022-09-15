
const mongoose = require('mongoose');
const {Schema} = mongoose;


const TiendaSchema = new Schema ({
    slist1: { type: String, required:true }, // Categoria
    linkslist1: { type: String, required:true }, // Link
    fotoslist1: { type: String, required:true }, // Foto Categoria
});


module.exports = mongoose.model('Tienda', TiendaSchema);
