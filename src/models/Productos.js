const mongoose = require('mongoose');
const { Schema } = mongoose;


const ProductoSchema = new Schema({
    status: { type: String }, // Apply, Aproved, Void, Delete

    slist1: { type: String }, // Tienda
    slist2: { type: String }, // Category old Familia
    slist3: { type: String }, // Producto

    linkslist1: { type: String }, // Link en tienda
    linkslist2: { type: String }, // Link en familia
    linkslist3: { type: String }, // Link en productos

    foto1: { type: String }, // Foto
    foto2: { type: String }, // Foto
    foto3: { type: String }, // Foto
    foto4: { type: String }, // Foto

    desslist: { type: String }, // Descripcion Familia
    desslist3: { type: String }, // Descripcion Category
    descrip: { type: String }, // Descripcion Producto

    presenta: { type: String },
    cantidad: { type: Number },
    precio1: { type: String },
    pre1: { type: Number },
    precio2: { type: String },
    pre2: { type: Number },

    proy: { type: String },
    date: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Productos', ProductoSchema);