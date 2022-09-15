
const express = require('express');
const router = express.Router();

const { isAuthenticated } = require('../helpers/auth')

const Producto = require('../models/Productos');
const Proyect = require('../models/Proyecto');
const User = require('../models/User');


router.get('/productos', async (req, res) => {
    const aceite = await Producto.find({ "slist1": "Aceites", "status": "Apply"});
    const aceinum = aceite.length;
    const conser = await Producto.find({ "slist1": "Conservas", "status": "Apply"});
    const consnum = conser.length;
    const cosmetica = await Producto.find({ "slist1": "Cosmetica", "status": "Apply"});
    const cosmnum = cosmetica.length;
    const frutsec = await Producto.find({ "slist1": "Frutos Secos", "status": "Apply"});
    const fsecnum = frutsec.length;
    const navidad = await Producto.find({ "slist1": "Navidad", "status": "Apply"});
    const navnum = navidad.length;

    
    res.render('productos/productos', { aceite, aceinum, consnum, conser, cosmetica, cosmnum, frutsec, fsecnum, navidad, navnum, frutsec, fsecnum, title: 'Productos'});
});


router.get('/productos2', async (req, res) => {
    const aceite = await Producto.find({ "slist1": "Aceites", "status": "Aproved"});
    const aceinum = aceite.length;
    const conser = await Producto.find({ "slist1": "Conservas", "status": "Aproved"});
    const consnum = conser.length;
    const cosmetica = await Producto.find({ "slist1": "Cosmetica", "status": "Aproved"});
    const cosmnum = cosmetica.length;
    const frutsec = await Producto.find({ "slist1": "Frutos Secos", "status": "Aproved"});
    const fsecnum = frutsec.length;
    const navidad = await Producto.find({ "slist1": "Navidad", "status": "Aproved"});
    const navnum = navidad.length;

    
    res.render('productos/productos2', { aceite, aceinum, consnum, conser, cosmetica, cosmnum, frutsec, fsecnum, navidad, navnum, frutsec, fsecnum, title: 'Productos'});
});


router.get('/proddet/:id', async (req, res) => {
    const producto = await Producto.findOne({"_id": req.params.id});
    res.render('productos/proddet', { producto, title: 'Productos'});
});


router.get('/proddet2/:id', async (req, res) => {
    const producto = await Producto.findOne({"_id": req.params.id});
    res.render('productos/proddet2', { producto, title: 'Productos'});
});


router.get('/prodedit/:id', isAuthenticated, async (req, res) => {
    const producto = await Producto.findById(req.params.id);
    res.render('productos/prodedit', { producto, title: 'Productos'});
});


router.put('/prodedit/:id', isAuthenticated, async (req, res) => {
    let { presenta, cantidad, precio, oferta, descrip, foto1, foto2 } = req.body;
    pre1 = !oferta ? precio : oferta;
    const precio1 = String(pre1).replace(/(.)(?=(\d{3})+$)/g,'$1,');
    pre2 = !oferta ? "" : precio;
    const precio2 = String(pre2).replace(/(.)(?=(\d{3})+$)/g,'$1,');
    await Producto.findByIdAndUpdate(req.params.id, { presenta, cantidad, pre1, precio1, pre2, precio2, descrip, foto1, foto2 });

    const producto = await Producto.findOne({"_id": req.params.id});
    res.render('productos/proddet', { producto, title: 'Productos'});
});


router.get('/prodedit2/:id', isAuthenticated, async (req, res) => {
    const producto = await Producto.findById(req.params.id);
    res.render('productos/prodedit2', { producto, title: 'Productos'});
});


router.put('/prodedit2/:id', isAuthenticated, async (req, res) => {
    let { presenta, cantidad, precio, oferta, descrip, foto1, foto2 } = req.body;
    pre1 = !oferta ? precio : oferta;
    const precio1 = String(pre1).replace(/(.)(?=(\d{3})+$)/g,'$1,');
    pre2 = !oferta ? "" : precio;
    const precio2 = String(pre2).replace(/(.)(?=(\d{3})+$)/g,'$1,');
    await Producto.findByIdAndUpdate(req.params.id, { presenta, cantidad, pre1, precio1, pre2, precio2, descrip, foto1, foto2 });

    const producto = await Producto.findOne({"_id": req.params.id});
    res.render('productos/proddet2', { producto, title: 'Productos'});
});


router.get('/prodpage/:id', isAuthenticated, async (req, res) => {
    const status = "Aproved";
    await Producto.findByIdAndUpdate(req.params.id, { status });
    res.redirect('/productos')
});


router.delete('/proddelete/:id', isAuthenticated, async (req, res) => {
    await Producto.findByIdAndDelete(req.params.id);
    const producto = await Producto.findOne({"_id": req.params.id});
    res.redirect('/productos')
});


module.exports = router;
