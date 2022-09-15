
const express = require('express');
const router = express.Router();

const { isAuthenticated } = require('../helpers/auth')
const dateFormat = require('dateformat');
const flash = require('connect-flash');

const User = require('../models/User');
const Productos = require('../models/Productos');
const Cart = require('../models/Cart');


router.get('/users', async (req, res) => {
    const Users = await User.find();
    const usnum = Users.length;
    res.render('users/users', { Users, usnum, title: 'Usuarios'});
});


router.get('/usrdet/:id', async (req, res) => {
    const user = req.params.id;
    const Usr = await User.findById(user);
    const cartusr = await Cart.find({ "user": user, "status": "cart" });
    const confusr = await Cart.find({ "user": user, "status": "confirm" });
    const envusr = await Cart.find({ "user": user, "status": "sent" });
    const payusr = await Cart.find({ "user": user, "status": "pay" });
    const cartcost = [];
    const carttot = [];
    const confcost = [];
    const conftot = [];
    const envcost = [];
    const envtot = [];
    const paycost = [];
    const paytot = [];
    if(cartusr) {
        const num = cartusr.length - 1;
        let total = 0;
        for(i=0; i<=num; i++){
            let id = cartusr[i].id;
            let prod = cartusr[i].prodid;
            let qtyty = cartusr[i].qty;
            const Prodincart = await Productos.findById(prod);
            let name = Prodincart.slist3;
            let precio = Prodincart.pre1;
            let subtotal = precio * qtyty;
            total = total + subtotal;
            const pre = String(precio).replace(/(.)(?=(\d{3})+$)/g,'$1,')
            let subtot = String(subtotal).replace(/(.)(?=(\d{3})+$)/g,'$1,')
            let tot = String(total).replace(/(.)(?=(\d{3})+$)/g,'$1,')
            cartcost.push({ "_id": id, "name": name, "precio": precio, "pre": pre, "qtyty": qtyty, "subtotal": subtotal, "subtot": subtot });
            if(i== num){
                carttot.push({ "user": user, "total": total, "tot": tot });
            };
        };
    };
    if(confusr){
        const num = confusr.length - 1;
        let total = 0;
        for(i=0; i<=num; i++){
            let id = confusr[i].id;
            let prod = confusr[i].prodid;
            let qtyty = confusr[i].qty;
            const Prodincart = await Productos.findById(prod);
            let name = Prodincart.slist3;
            let precio = Prodincart.pre1;
            let subtotal = precio * qtyty;
            total = total + subtotal;
            const pre = String(precio).replace(/(.)(?=(\d{3})+$)/g,'$1,')
            let subtot = String(subtotal).replace(/(.)(?=(\d{3})+$)/g,'$1,')
            let tot = String(total).replace(/(.)(?=(\d{3})+$)/g,'$1,')
            confcost.push({ "_id": id, "name": name, "precio": precio, "pre": pre, "qtyty": qtyty, "subtotal": subtotal, "subtot": subtot });
            if(i== num){
                conftot.push({ "user": user, "total": total, "tot": tot });
            };
        };
    };
    if(envusr){
        const num = envusr.length - 1;
        let total = 0;
        for(i=0; i<=num; i++){
            let id = envusr[i].id;
            let prod = envusr[i].prodid;
            let qtyty = envusr[i].qty;
            const Prodincart = await Productos.findById(prod);
            let name = Prodincart.slist3;
            let precio = Prodincart.pre1;
            let subtotal = precio * qtyty;
            total = total + subtotal;
            const pre = String(precio).replace(/(.)(?=(\d{3})+$)/g,'$1,')
            let subtot = String(subtotal).replace(/(.)(?=(\d{3})+$)/g,'$1,')
            let tot = String(total).replace(/(.)(?=(\d{3})+$)/g,'$1,')
            envcost.push({ "_id": id, "name": name, "precio": precio, "pre": pre, "qtyty": qtyty, "subtotal": subtotal, "subtot": subtot });
            if(i== num){
                envtot.push({ "user": user, "total": total, "tot": tot });
            };
        };
    };
    if(payusr){
        const num = payusr.length - 1;
        let total = 0;
        for(i=0; i<=num; i++){
            let id = payusr[i].id;
            let prod = payusr[i].prodid;
            let qtyty = payusr[i].qty;
            const Prodincart = await Productos.findById(prod);
            let name = Prodincart.slist3;
            let precio = Prodincart.pre1;
            let subtotal = precio * qtyty;
            total = total + subtotal;
            const pre = String(precio).replace(/(.)(?=(\d{3})+$)/g,'$1,')
            let subtot = String(subtotal).replace(/(.)(?=(\d{3})+$)/g,'$1,')
            let tot = String(total).replace(/(.)(?=(\d{3})+$)/g,'$1,')
            paycost.push({ "_id": id, "name": name, "precio": precio, "pre": pre, "qtyty": qtyty, "subtotal": subtotal, "subtot": subtot });
            if(i== num){
                paytot.push({ "user": user, "total": total, "tot": tot });
            };
        };
    };


    res.render('users/usrdet', { Usr, cartcost, carttot, confcost, conftot, envcost, envtot, paycost, paytot, title: 'User Detail' });
});


module.exports = router;
