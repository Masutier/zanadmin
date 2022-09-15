
const express = require('express');
const router = express.Router();

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


    const costconf = await Cart.find({ "status": "confirm" }).sort('-user');
    const confnum = costconf.length;
    let num = confnum - 1;

    for(i=0; i<=num; i++){
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


        cost.push({ 
            "usrid": usrid, "usrname": usrname, "usrlast": usrlast, "usrtel": usrtel, 
            "usradd": usradd, "usrbrr": usrbrr, "usrcty": usrcty, "usrdep": usrdep, "usrpais": usrpais, 
            "costal": { "cosid": cosid, "cosqty": cosqty, "prodid": prodid, "prodname": prodname, "prodpre1": prodpre1, "prodsub": prodsub },
            "cosdate": cosdate 
            });

    };

    console.log(cost)

    res.render('costales/costconf', { mensaje, cost, title: 'Costales Confirmados'});
});


module.exports = router;
