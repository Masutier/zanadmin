
const express = require('express');
const router = express.Router();

const { isAuthenticated } = require('../helpers/auth')
const dateFormat = require('dateformat');
const flash = require('connect-flash');

const Proyect = require('../models/Proyecto');
const User = require('../models/User');


router.get('/proyects', async (req, res) => {
    const proyectos = await Proyect.find();
    const totproy = proyectos.length;
    const Applayed = await Proyect.find({status: "Apply"});
    const appnum = Applayed.length;
    const Visitado = await Proyect.find({status: "Pross"});
    const visnum = Visitado.length;
    const Active = await Proyect.find({status: "Active"});
    const actnum = Active.length;
    const Nopass = await Proyect.find({status: "Nopass"});
    const nonum = Nopass.length;
    const Retired = await Proyect.find({status: "Retired"});
    const retnum = Retired.length;
    const Reject = await Proyect.find({status: "Reject"});
    const rejnum = Reject.length;
    res.render('proyectos/proyects', { totproy, Applayed, appnum, Visitado, visnum, Active, actnum, Nopass, nonum, Retired, retnum, Reject, rejnum, title: 'Proyectos'});
});


router.get('/pryvisit/:id', isAuthenticated, async (req, res) => {
    const Applayed = await Proyect.findById(req.params.id);
    res.render('proyectos/pryvisit', { Applayed, title: 'Proyectos' });
});


router.post('/visit/:id', isAuthenticated, async (req, res) => {
    const errors = [];
    const user = await User.findById(req.user.id)
    let visitax = user.id;
    const Applayed = await Proyect.findById(req.params.id);
    let { 
        proyVisdate, 
        visitax1, visitacc1, visitax2, visitacc2, visitax3, visitacc3, 
        // part 1
        vis1, vis2, vis2t, vis2d, vis3, vis3t, vis3d, vis4, vis5, 
        // part 2
        vis6, vis6t, vis7, vis7t, vis8, vis9, vis9t, vis10, vis10t, 
        // part 3
        vis11t, vis12t, vis13t, vis14, vis14t, vis15t, vis16, vis16t,
        // part 4
        vis17, vis17t, vis18, vis18t, vis19, vis19t, vis20, vis20t, vis21, vis21t,
        // part 5
        vis22, vis22t, vis23, vis24, vis24t, vis25, vis25t, vis26, vis26t, vis27,
        // part 6
        vis28, vis28t, vis29t, vis30, vis30t, vis31, vis31t, vis32,
        // part 7
        vis33, vis33t, vis34, vis34t, vis35, vis35t,
        // part 8
        vis36, vis37, vis37t, vis38, vis38t, vis39,
        // part 9
        vis40, vis40t, vis41, vis41t,
        notasvisit, prodsug, cumple } = req.body;
    function formatUserCedula(visitacc1){
        visitacc1 = visitacc1.replace(/[^\d]/g, "");
        return visitacc1.replace(/(.)(?=(\d{3})+$)/g,'$1,');
    };
    function formatUserCedula(visitacc2){
        visitacc2 = visitacc2.replace(/[^\d]/g, "");
        return visitacc2.replace(/(.)(?=(\d{3})+$)/g,'$1,');
    };
    function formatUserCedula(visitacc3){
        visitacc3 = visitacc3.replace(/[^\d]/g, "");
        return visitacc3.replace(/(.)(?=(\d{3})+$)/g,'$1,');
    };
    let cedviscc1 = formatUserCedula(visitacc1);
    let cedviscc2 = formatUserCedula(visitacc2);
    let cedviscc3 = formatUserCedula(visitacc3);
    const now = new Date();
    const visitformdate = dateFormat(now, "mmm dd yyyy, h:MM TT");
    // nueva visita
    if(!Applayed.proydate.proyVisdate || Applayed.proydate.proyVisdate == undefined){
        if(proyVisdate.length <= 0){
            errors.push({text: 'Por favor introducir la fecha de la visita'})
        };
        if(visitax1.length <= 0){
            errors.push({text: 'Se requiere al menos un testigo de la visita'})
        };
        if(visitacc1.length <= 0){
            errors.push({text: 'Se requiere el numero de identidad del testigo'})
        };
        if(notasvisit == ""){
            errors.push({text: 'Por favor introducir notas sobre la visita'})
        };
        if(errors.length > 0){
            res.render('proyectos/pryvisit', { Applayed, errors, proyVisdate, 
            visitax1, cedviscc1, visitax2, cedviscc2, visitax3, cedviscc3, 
            // part 1
            vis1, vis2, vis2t, vis2d, vis3, vis3t, vis3d, vis4, vis5, 
            // part 2
            vis6, vis6t, vis7, vis7t, vis8, vis9, vis9t, vis10, vis10t, 
            // part 3
            vis11t, vis12t, vis13t, vis14, vis14t, vis15t, vis16, vis16t, vis32,
            // part 4
            vis17, vis17t, vis18, vis18t, vis19, vis19t, vis20, vis20t, vis21, vis21t,
            // part 5
            vis22, vis22t, vis23, vis24, vis24t, vis25, vis25t, vis26, vis26t, vis27,
            // part 6
            vis28, vis28t, vis29t, vis30, vis30t, vis31, vis31t, vis32,
            // part 7
            vis33, vis33t, vis34, vis34t, vis35, vis35t,
            // part 8
            vis36, vis37, vis37t, vis38, vis38t, vis39,
            // part 9
            vis40, vis40t, vis41, vis41t,
            // notas
            notasvisit, prodsug, falta, cumple, title: 'Proyectos' });
        }else{
            let notasapply = Applayed.notas.notasapply;
            let proyAappldate = Applayed.proydate.proyAappldate;
            await Proyect.findByIdAndUpdate(req.params.id, { 
                visit: {
                    visitax, 
                    testigos: {
                        visitax1, cedviscc1, visitax2, cedviscc2, visitax3, cedviscc3
                    },
                    agricola: {
                        vis1, vis2, vis2t, vis2d, vis3, vis3t, vis3d, vis4, vis5, 
                        vis6, vis6t, vis7, vis7t, vis8, vis9, vis9t, vis10, vis10t, 
                        vis11t, vis12t, vis13t, vis14, vis14t, vis15t, vis16, vis16t, vis32
                    },
                    prosesados: {
                        vis17, vis17t, vis18, vis18t, vis19, vis19t, vis20, vis20t, vis21, vis21t,
                        vis22, vis22t, vis23, vis24, vis24t, vis25, vis25t, vis26, vis26t, vis27,
                        vis28, vis28t, vis29t, vis30, vis30t, vis31, vis31t
                    },
                    otrosprod:{
                        vis33, vis33t, vis34, vis34t, vis35, vis35t,
                        vis36, vis37, vis37t, vis38, vis38t, vis39,
                        vis40, vis40t, vis41, vis41t
                    }
                },
                productos: {
                    prodsug
                },
                notas:{
                    notasapply, notasvisit
                },
                proydate: {
                    proyAappldate, proyVisdate, visitformdate
                }
            });
        };
    }else{
        // otra visita con fecha diferente
        if(Applayed.proydate.proyVisdate != proyVisdate){
            if(proyVisdate.length <= 0){
                errors.push({text: 'Por favor introducir la fecha de la visita'})
            };
            if(visitax1.length <= 0){
                errors.push({text: 'Se requiere al menos un testigo de la visita'})
            };
            if(visitacc1.length <= 0){
                errors.push({text: 'Se requiere el numero de identidad del testigo'})
            };
            if(Applayed.visit.testigos.cedviscc1 == visitacc1){
                errors.push({text: 'El Administrador que esta bajo el "LogIn" no puede ser testigo'})
            };
            if(notasvisit == ""){
                errors.push({text: 'Por favor introducir notas sobre la visita'})
            };
            if(errors.length > 0){
                res.render('proyectos/pryvisit', { Applayed, errors, proyVisdate, 
                visitax1, cedviscc1, visitax2, cedviscc2, visitax3, cedviscc3, 
                // part 1
                vis1, vis2, vis2t, vis2d, vis3, vis3t, vis3d, vis4, vis5, 
                // part 2
                vis6, vis6t, vis7, vis7t, vis8, vis9, vis9t, vis10, vis10t, 
                // part 3
                vis11t, vis12t, vis13t, vis14, vis14t, vis15t, vis16, vis16t, vis32,
                // part 4
                vis17, vis17t, vis18, vis18t, vis19, vis19t, vis20, vis20t, vis21, vis21t,
                // part 5
                vis22, vis22t, vis23, vis24, vis24t, vis25, vis25t, vis26, vis26t, vis27,
                // part 6
                vis28, vis28t, vis29t, vis30, vis30t, vis31, vis31t,
                // part 7
                vis33, vis33t, vis34, vis34t, vis35, vis35t,
                // part 8
                vis36, vis37, vis37t, vis38, vis38t, vis39,
                // part 9
                vis40, vis40t, vis41, vis41t,
                // notas
                notasvisit, prodsug, falta, cumple, title: 'Proyectos' });
            }else{
                let notasapply = Applayed.notas.notasapply;
                let proyAappldate = Applayed.proydate.proyAappldate;
                proyVisdate1 = proyVisdate;
                proyVisdate = Applayed.proydate.proyVisdate;

                if(visitax == Applayed.visit.visitax){
                }else{
                    visitax = Applayed.visit.visitax;
                };
                if(cedviscc1 != Applayed.visit.testigos.cedviscc1){
                    visitax2 = visitax1;
                    cedviscc2 = cedviscc1;
                    visitax1 = Applayed.visit.testigos.visitax1;
                    cedviscc1 = Applayed.visit.testigos.cedviscc1;
                    visitax3 = Applayed.visit.testigos.visitax3;
                    cedviscc3 = Applayed.visit.testigos.cedviscc3;
                };
            // agricolas
                if(vis1 == "" || vis1 == null || undefined){
                    vis1 = Applayed.visit.agricola.vis1;
                };
                if(vis2 == "" || vis1 == null || undefined){
                    vis2 = Applayed.visit.agricola.vis2;
                };
                if(vis2t == ""){
                    vis2t = Applayed.visit.agricola.vis2t;
                };
                if(vis2d == ""){
                    vis2d = Applayed.visit.agricola.vis2d;
                };
                if(vis3 == "" || vis1 == null || undefined){
                    vis3 = Applayed.visit.agricola.vis3;
                };
                if(vis3t == ""){
                    vis3t = Applayed.visit.agricola.vis3t;
                };
                if(vis3d == ""){
                    vis3d = Applayed.visit.agricola.vis3d;
                };
                if(vis4 == "" || vis1 == null || undefined){
                    vis4 = Applayed.visit.agricola.vis4;
                };
                if(vis5 == "" || vis1 == null || undefined){
                    vis5 = Applayed.visit.agricola.vis5;
                };
                if(vis6 == "" || vis1 == null || undefined){
                    vis6 = Applayed.visit.agricola.vis6;
                };
                if(vis6t == ""){
                    vis6t = Applayed.visit.agricola.vis6t;
                };
                if(vis7 == "" || vis1 == null || undefined){
                    vis7 = Applayed.visit.agricola.vis7;
                };
                if(vis7t == ""){
                    vis7t = Applayed.visit.agricola.vis7t;
                };
                if(vis8 == "" || vis1 == null || undefined){
                    vis8 = Applayed.visit.agricola.vis8;
                };
                if(vis9 == "" || vis1 == null || undefined){
                    vis9 = Applayed.visit.agricola.vis9;
                };
                if(vis9t == ""){
                    vis9t = Applayed.visit.agricola.vis9t;
                };
                if(vis10 == "" || vis1 == null || undefined){
                    vis10 = Applayed.visit.agricola.vis10;
                };
                if(vis10t == ""){
                    vis10t = Applayed.visit.agricola.vis10t;
                };
                if(vis11t == ""){
                    vis11t = Applayed.visit.agricola.vis11t;
                };
                if(vis12t == ""){
                    vis12t = Applayed.visit.agricola.vis12t;
                };
                if(vis13t == ""){
                    vis13t = Applayed.visit.agricola.vis13t;
                };
                if(vis14 == "" || vis1 == null || undefined){
                    vis14 = Applayed.visit.agricola.vis14;
                };
                if(vis14t == ""){
                    vis14t = Applayed.visit.agricola.vis14t;
                };
                if(vis15t == ""){
                    vis15t = Applayed.visit.agricola.vis15t;
                };
                if(vis16 == "" || vis1 == null || undefined){
                    vis16 = Applayed.visit.agricola.vis16;
                };
                if(vis16t == ""){
                    vis16t = Applayed.visit.agricola.vis16t;
                };
                if(vis32 == "" || vis1 == null || undefined){
                    vis32 = Applayed.visit.agricola.vis32;
                };
            // procesados
                if(vis17 == "" || vis1 == null || undefined){
                    vis17 = Applayed.visit.agricola.vis17;
                };
                if(vis17t == ""){
                    vis17t = Applayed.visit.agricola.vis17t;
                };
                if(vis18 == "" || vis1 == null || undefined){
                    vis18 = Applayed.visit.agricola.vis17;
                };
                if(vis18t == ""){
                    vis18t = Applayed.visit.agricola.vis18t;
                };
                if(vis19 == "" || vis1 == null || undefined){
                    vis19 = Applayed.visit.agricola.vis19;
                };
                if(vis19t == ""){
                    vis19t = Applayed.visit.agricola.vis19t;
                };
                if(vis20 == "" || vis1 == null || undefined){
                    vis20 = Applayed.visit.agricola.vis20;
                };
                if(vis20t == ""){
                    vis20t = Applayed.visit.agricola.vis20t;
                };
                if(vis21 == "" || vis1 == null || undefined){
                    vis21 = Applayed.visit.agricola.vis21;
                };
                if(vis21t == ""){
                    vis21t = Applayed.visit.agricola.vis21t;
                };
                if(vis22 == "" || vis1 == null || undefined){
                    vis22 = Applayed.visit.agricola.vis22;
                };
                if(vis22t == ""){
                    vis22t = Applayed.visit.agricola.vis22t;
                };
                if(vis23 == "" || vis1 == null || undefined){
                    vis23 = Applayed.visit.agricola.vis23;
                };
                if(vis24 == "" || vis1 == null || undefined){
                    vis24 = Applayed.visit.agricola.vis24;
                };
                if(vis24t == ""){
                    vis24t = Applayed.visit.agricola.vis24t;
                };
                if(vis25 == "" || vis1 == null || undefined){
                    vis25 = Applayed.visit.agricola.vis25;
                };
                if(vis25t == ""){
                    vis25t = Applayed.visit.agricola.vis25t;
                };
                if(vis26 == "" || vis1 == null || undefined){
                    vis26 = Applayed.visit.agricola.vis26;
                };
                if(vis26t == ""){
                    vis26t = Applayed.visit.agricola.vis26t;
                };
                if(vis27 == "" || vis1 == null || undefined){
                    vis27 = Applayed.visit.agricola.vis27;
                };
                if(vis28 == "" || vis1 == null || undefined){
                    vis28 = Applayed.visit.agricola.vis28;
                };
                if(vis28t == ""){
                    vis28t = Applayed.visit.agricola.vis28t;
                };
                if(vis29t == ""){
                    vis29t = Applayed.visit.agricola.vis29t;
                };
                if(vis30 == "" || vis1 == null || undefined){
                    vis30 = Applayed.visit.agricola.vis30;
                };
                if(vis30t == ""){
                    vis30t = Applayed.visit.agricola.vis30t;
                };
                if(vis31 == "" || vis1 == null || undefined){
                    vis31 = Applayed.visit.agricola.vis31;
                };
                if(vis31t == ""){
                    vis31t = Applayed.visit.agricola.vis31t;
                };
            // otrosprod
                if(vis33 == "" || vis1 == null || undefined){
                    vis33 = Applayed.visit.agricola.vis33;
                };
                if(vis33t == ""){
                    vis33t = Applayed.visit.agricola.vis33t;
                };
                if(vis34 == "" || vis1 == null || undefined){
                    vis34 = Applayed.visit.agricola.vis34;
                };
                if(vis34t == ""){
                    vis34t = Applayed.visit.agricola.vis34t;
                };
                if(vis35 == "" || vis1 == null || undefined){
                    vis35 = Applayed.visit.agricola.vis35;
                };
                if(vis35t == ""){
                    vis35t = Applayed.visit.agricola.vis35t;
                };
                if(vis36 == "" || vis1 == null || undefined){
                    vis36 = Applayed.visit.agricola.vis36;
                };
                if(vis37 == "" || vis1 == null || undefined){
                    vis37 = Applayed.visit.agricola.vis37;
                };
                if(vis37t == ""){
                    vis37t = Applayed.visit.agricola.vis37t;
                };
                if(vis38 == "" || vis1 == null || undefined){
                    vis38 = Applayed.visit.agricola.vis38;
                };
                if(vis38t == ""){
                    vis38t = Applayed.visit.agricola.vis38t;
                };
                if(vis39 == "" || vis1 == null || undefined){
                    vis39 = Applayed.visit.agricola.vis39;
                };
                if(vis40 == "" || vis1 == null || undefined){
                    vis40 = Applayed.visit.agricola.vis40;
                };
                if(vis40t == ""){
                    vis40t = Applayed.visit.agricola.vis40t;
                };
                if(vis41 == "" || vis1 == null || undefined){
                    vis41 = Applayed.visit.agricola.vis41;
                };
                if(vis41t == ""){
                    vis41t = Applayed.visit.agricola.vis41t;
                };

                if(prodsug == ""){
                    prodsug = Applayed.visit.prodsug;
                };
                if(notasvisit == ""){
                    notasvisit = Applayed.notas.notasvisit;
                }else{
                    notasvisit1 = notasvisit;
                    notasvisit = Applayed.notas.notasvisit;
                };
                await Proyect.findByIdAndUpdate(req.params.id, { 
                    visit: {
                        visitax, 
                        testigos: {
                            visitax1, cedviscc1, visitax2, cedviscc2, visitax3, cedviscc3
                        },
                        agricola: {
                            vis1, vis2, vis2t, vis2d, vis3, vis3t, vis3d, vis4, vis5, 
                            vis6, vis6t, vis7, vis7t, vis8, vis9, vis9t, vis10, vis10t, 
                            vis11t, vis12t, vis13t, vis14, vis14t, vis15t, vis16, vis16t, vis32,
                        },
                        prosesados: {
                            vis17, vis17t, vis18, vis18t, vis19, vis19t, vis20, vis20t, vis21, vis21t,
                            vis22, vis22t, vis23, vis24, vis24t, vis25, vis25t, vis26, vis26t, vis27,
                            vis28, vis28t, vis29t, vis30, vis30t, vis31, vis31t
                        },
                        otrosprod:{
                            vis33, vis33t, vis34, vis34t, vis35, vis35t,
                            vis36, vis37, vis37t, vis38, vis38t, vis39,
                            vis40, vis40t, vis41, vis41t
                        }
                    },
                    productos: {
                        prodsug
                    },
                    notas:{
                        notasapply, notasvisit, notasvisit1
                    },
                    proydate: {
                        proyAappldate, proyVisdate, visitformdate, proyVisdate1
                    }
                });
            };
        };
    };
    if(cumple == "on"){
        status = "Pross";
        await Proyect.findByIdAndUpdate(req.params.id, { status });
        req.flash('success_msg', 'Datos Guardados y el Proyecto pasa a Proceso');
        res.redirect('/proyects');
    }else{
        req.flash('success_msg', 'Datos Guardados y el Proyecto permanece en espera de mas información');
        res.redirect('/proyects');
    };
});


router.get('/prypross/:id', isAuthenticated, async (req, res) => {
    const Applayed = await Proyect.findById(req.params.id);
    const Admin = await User.findById(Applayed.visit.visitax);
    res.render('proyectos/prypross', { Applayed, Admin, title: 'Proyectos' });
});


router.post('/pross/:id', isAuthenticated, async (req, res) => {
    const errors = [];
    const { prodappr, notasappr, cumple } = req.body;
    const user = await User.findById(req.user.id);
    const approvx = user.id
    const Applayed = await Proyect.findById(req.params.id);
    if(prodappr <= 0){
        errors.push({text: 'Hay que aprobar productos, esto ayuda a tener control sobre ellos'})
    };
    if(notasappr <= 0){
        errors.push({text: 'Se requieren las notas de Aprobación'})
    };
    if(errors.length > 0){
        res.render('proyectos/prypross', { Applayed, errors, prodappr, notasappr, title: 'Proyectos' });
    }else{
        const prodsug = Applayed.productos.prodsug;
        const notasapply = Applayed.notas.notasapply;
        const notasvisit = Applayed.notas.notasvisit;
        const notasvisit1 = Applayed.notas.notasvisit1;
        const proyAappldate = Applayed.proydate.proyAappldate;
        const proyVisdate = Applayed.proydate.proyVisdate;
        const visitformdate = Applayed.proydate.visitformdate;
        const proyVisdate1 = Applayed.proydate.proyVisdate1;
        const now = new Date();
        const proyApprdate = dateFormat(now, "mmm dd yyyy, h:MM TT");

        await Proyect.findByIdAndUpdate(req.params.id, { 
            approvx,
            productos: {
                prodsug, prodappr
            },
            notas:{
                notasapply, notasvisit, notasvisit1, notasappr
            },
            proydate: {
                proyAappldate, proyVisdate, visitformdate, proyVisdate1, proyApprdate
            }
        });
        if(cumple == "on"){
            status = "Active"
            await Proyect.findByIdAndUpdate(req.params.id, { status });
            req.flash('success_msg', 'Datos Guardados y el Proyecto queda Activo')
            res.redirect('/proyects');
        }else{
            req.flash('success_msg', 'Datos Guardados y el Proyecto permanece en espera de mas información')
            res.redirect('/proyects');
        }
    }
});


router.get('/proyactive/:id', async (req, res) => {
    const kateg = [];
    const kateg1 = [];
    let act = 0;
    const Aproved = await Proyect.findById(req.params.id);
    kateg.push(
        Aproved.proycategories.proyectone,
        Aproved.proycategories.proyecttwo,
        Aproved.proycategories.proyectthre,
        Aproved.proycategories.proyectfour,
        Aproved.proycategories.proyectfive,
        Aproved.proycategories.proyectsix,
        Aproved.proycategories.proyectseven);
    for (i = 0; i <= kateg.length; i++) {
        if (kateg[i] == "") {} else {
            if (kateg[i] == undefined) {} else {
                kateg1.push(kateg[i]);
            };
        };
    };
    res.render('proyectos/proyactive', { Aproved, kateg1, act, title: 'Proyectos' });
});

module.exports = router;
