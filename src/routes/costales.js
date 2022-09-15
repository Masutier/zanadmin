
const express = require('express');
const router = express.Router();

const dateFormat = require('dateformat');

const User = require('../models/User');
const Productos = require('../models/Productos');
const Cart = require('../models/Cart');


router.get('/costconf', async (req, res) => {
    let mensaje = "";
    const cost = [];
    const usex = [];
    const confcost = [];
    const conftot = [];
    const confirmados = [];
    let estimado = 0;
    let money = 0;
    const costconf = await Cart.find({ "status": "confirm" }).sort('-user');
    const confnum = costconf.length;
    for(i=0; i<costconf.length; i++){
        //costal id
        const cosid = costconf[i]._id;
        //costal qty
        const cosqty = costconf[i].qty;
        //costal producto
        const prodid = costconf[i].prodid;
        const producto = await Productos.findById(prodid);
        const prodname = producto.slist3;
        const prodpre = producto.pre1;
        const prodpre1 = producto.precio1;
        const prodsub = cosqty * prodpre;
        //costal user
        const usrid = costconf[i].user;
        const user = await User.findById(usrid);
        const usrrol = user.rolin;
        const usrname = user.firstname;
        const usrlast = user.lastname;
        const usrtel = user.phoneNum;
        const usradd = user.address.usraddress;
        const usrbrr = user.address.usrbarrio;
        const usrcty = user.address.usrcity;
        const usrdep = user.address.usrdept;
        const usrpais = user.address.usrpais;
        //costal date
        const cosdate = costconf[i].confdate;
        money = money + prodsub;
        cost.push({ 
            "_id": cosid,
            "usrid": usrid, "usrname": usrname, "usrlast": usrlast, "usrtel": usrtel, "usrrol": usrrol, 
            "usradd": usradd, "usrbrr": usrbrr, "usrcty": usrcty, "usrdep": usrdep, "usrpais": usrpais, 
            "costal": { "cosqty": cosqty, "prodid": prodid, "prodname": prodname, "prodpre1": prodpre1, "prodsub": prodsub },
            "cosdate": cosdate
            });
    };
    estimado = String(money).replace(/(.)(?=(\d{3})+$)/g,'$1,')
    res.render('costales/costconf', { mensaje, confnum, estimado, cost, title: 'Costales Confirmados'});
});


router.get('/costenv/:id', async (req, res) => {
    const id = req.params.id
    const now = new Date();
    const sentdate = dateFormat(now, "mmm dd yyyy, h:MM TT");
    const result = await Cart.update( { _id: id }, { $set: { status: "sent" }} );
    const result2 = await Cart.update( { _id: id }, { $set: { sentdate: sentdate }} );
    res.redirect('/costconf');
});


router.get('/costsent', async (req, res) => {
    let mensaje = "";
    const cost = [];
    const usex = [];
    const confcost = [];
    const conftot = [];
    const confirmados = [];
    let estimado = 0;
    let money = 0;
    const costconf = await Cart.find({ "status": "sent" }).sort('-user');
    const confnum = costconf.length;
    for(i=0; i<costconf.length; i++){
        //costal id
        const cosid = costconf[i]._id;
        //costal qty
        const cosqty = costconf[i].qty;
        //costal producto
        const prodid = costconf[i].prodid;
        const producto = await Productos.findById(prodid);
        const prodname = producto.slist3;
        const prodpre = producto.pre1;
        const prodpre1 = producto.precio1;
        const prodsub = cosqty * prodpre;
        //costal user
        const usrid = costconf[i].user;
        const user = await User.findById(usrid);
        const usrrol = user.rolin;
        const usrname = user.firstname;
        const usrlast = user.lastname;
        const usrtel = user.phoneNum;
        const usradd = user.address.usraddress;
        const usrbrr = user.address.usrbarrio;
        const usrcty = user.address.usrcity;
        const usrdep = user.address.usrdept;
        const usrpais = user.address.usrpais;
        //costal date
        const senddate = costconf[i].sentdate;
        money = money + prodsub;
        cost.push({ 
            "_id": cosid,
            "usrid": usrid, "usrname": usrname, "usrlast": usrlast, "usrtel": usrtel, "usrrol": usrrol, 
            "usradd": usradd, "usrbrr": usrbrr, "usrcty": usrcty, "usrdep": usrdep, "usrpais": usrpais, 
            "costal": { "cosqty": cosqty, "prodid": prodid, "prodname": prodname, "prodpre1": prodpre1, "prodsub": prodsub },
            "senddate": senddate 
            });
    };
    estimado = String(money).replace(/(.)(?=(\d{3})+$)/g,'$1,')
    res.render('costales/costenv', { mensaje, confnum, estimado, cost, title: 'Costales Confirmados'});
});


router.get('/costpago/:id', async (req, res) => {
    const id = req.params.id
    const now = new Date();
    const paydate = dateFormat(now, "mmm dd yyyy, h:MM TT");
    const result = await Cart.update( { _id: id }, { $set: { status: "pay" }} );
    const result2 = await Cart.update( { _id: id }, { $set: { paydate: paydate }} );
    res.redirect('/costsent');
});


router.get('/costpay', async (req, res) => {
    let mensaje = "";
    const cost = [];
    const usex = [];
    const confcost = [];
    const conftot = [];
    const confirmados = [];
    let estimado = 0;
    let money = 0;
    const costconf = await Cart.find({ "status": "pay" }).sort('-user');
    const confnum = costconf.length;
    for(i=0; i<costconf.length; i++){
        //costal id
        const cosid = costconf[i]._id;
        //costal qty
        const cosqty = costconf[i].qty;
        //costal producto
        const prodid = costconf[i].prodid;
        const producto = await Productos.findById(prodid);
        const prodname = producto.slist3;
        const prodpre = producto.pre1;
        const prodpre1 = producto.precio1;
        const prodsub = cosqty * prodpre;
        //costal user
        const usrid = costconf[i].user;
        const user = await User.findById(usrid);
        const usrrol = user.rolin;
        const usrname = user.firstname;
        const usrlast = user.lastname;
        const usrtel = user.phoneNum;
        const usradd = user.address.usraddress;
        const usrbrr = user.address.usrbarrio;
        const usrcty = user.address.usrcity;
        const usrdep = user.address.usrdept;
        const usrpais = user.address.usrpais;
        //costal date
        const paydate = costconf[i].paydate;
        money = money + prodsub;
        cost.push({ 
            "_id": cosid,
            "usrid": usrid, "usrname": usrname, "usrlast": usrlast, "usrtel": usrtel, "usrrol": usrrol, 
            "usradd": usradd, "usrbrr": usrbrr, "usrcty": usrcty, "usrdep": usrdep, "usrpais": usrpais, 
            "costal": { "cosqty": cosqty, "prodid": prodid, "prodname": prodname, "prodpre1": prodpre1, "prodsub": prodsub },
            "paydate": paydate 
            });
    };
    estimado = String(money).replace(/(.)(?=(\d{3})+$)/g,'$1,')
    res.render('costales/costpay', { mensaje, confnum, estimado, cost, title: 'Costales Confirmados'});
});


module.exports = router;
