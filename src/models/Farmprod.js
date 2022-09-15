
const mongoose = require('mongoose');
const {Schema} = mongoose;


const FarmprodSchema = new Schema ({
    slist1: { type: String, required:true }, // Categoria
    slist2: { type: String, required:true }, // Familia
    slist3: { type: String, required: true }, // Producto
    desslist: { type: String, required:true }, // Descripcion Category
    foto1: { type: String, required:true }, // Foto Familia
    foto2: { type: String, required:true }, // Foto Familia
    cantidad: { type:String, required:true },
    unidad: { type:String, required:true },
    precio1: { type:String, required:true },
    precio2: { type:String },
    descrip: { type:String, required:true },
    proy: { type:String, required:true },
    xentrega: { type:String, required:true },
    indate: { type: String },
    date: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Farmprod', FarmprodSchema);
