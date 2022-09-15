
const express = require('express');
const router = express.Router();


const Cart = require('../models/Cart');
const Encuesta1 = require('../models/Encuesta1');
const Producto = require('../models/Productos');
const Proyect = require('../models/Proyecto');
const User = require('../models/User');


router.get('/', async (req, res) => {

    const costconf = await Cart.find({ "status": "confirm" });
    const confnum = costconf.length;

    const costenv = await Cart.find({ "status": "sent" });
    const envnum = costenv.length;

    const costpay = await Cart.find({ "status": "pay" });
    const paynum = costenv.length;


    const Proyects = await Proyect.find({ "status": "Apply" });
    const proyects = Proyects.length;

    const Proyaprov = await Proyect.find({ "status": "Active" });
    const pryappnum = Proyaprov.length;

    const Productap = await Producto.find({ "status": "Apply" });
    const prodnum = Productap.length;

    const Productpage = await Producto.find({ "status": "Aproved" });
    const prodpagenum = Productpage.length;

    const users = await User.find();
    const usuarios = users.length;

    const encuesta1 = await Encuesta1.find();
    const encu1 = encuesta1.length;

    res.render('index', { confnum, envnum, paynum, pryappnum, usuarios, encu1, proyects, prodnum, prodpagenum, title: 'Inicio'});
});


router.get('/thencu1', (req, res) => {

    res.render('thencu1', { title: 'Gracias'});
});


module.exports = router;
