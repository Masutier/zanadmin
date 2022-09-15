
const express = require('express');
const router = express.Router();

const dateFormat = require('dateformat');
const passport = require('passport');
const flash = require('connect-flash');

const User = require('../models/User');


router.get('/signup', (req, res) => {
    const minibann = "Registro de Usuario";
    const slog = "Esta informacion sera utilizada al completar tu Perfil"
    res.render('logs/signup', { minibann, slog, title: 'Registro'});
});


router.post('/signup', async (req, res) => {
    const { firstname, middlename, lastname, maidenname, tydoc, cedula, phone, email, password, confirm_pass } = req.body;
    const errors = [];
    if(firstname.length <= 0){
        errors.push({text: 'Por favor introducir su nombre'})
    }
    if(lastname.length <= 0){
        errors.push({text: 'Por favor introducir su nombre'})
    }
    if(maidenname.length <= 0){
        errors.push({text: 'Por favor introducir su nombre'})
    }
    if(email.length <= 0){
        errors.push({text: 'Por favor introducir su email'})
    }
    if(cedula.length <= 0){
        errors.push({text: 'Por favor introducir su email'})
    }
    if(phone.length <= 0){
        errors.push({text: 'Por favor introducir su email'})
    }
    if(password.length <= 0){
        errors.push({text: 'Por favor introducir su contraseña'})
    }
    if(password != confirm_pass){
        errors.push({text: 'Las contraseñas no coinciden'});
    }
    if(password.length < 4) {
        errors.push({text: 'La contraseña debe tener al menos 4 caracteres'})
    }
    if(errors.length > 0) {
        res.redirect('/signup',{ errors, firstname, middlename, lastname, maidenname, tydoc, cedula, phone, email, title: 'Registro' });
    } else {
        const emailUser = await User.findOne({email: email});
        if(emailUser){
            req.flash('error_message', 'El correo ya existe');
            res.render('/signup');
        }else{
            const phoneNum = formatPhone(phone);
            const cedulaId = formatCedula(cedula);
            const now = new Date();
            const newDate = dateFormat(now, "mmm dd yyyy, h:MM TT");
            const rolin = 'user';
            const newUser = new User({ rolin, firstname, middlename, lastname, maidenname, tydoc, cedulaId, phoneNum, email, password, newDate });
            newUser.password = await newUser.encryptPassword(password)
            await newUser.save();
            req.flash('success_msg', 'Registro Completo')
            res.redirect('/signin');
        };
    };
});


router.get('/signin', async (req, res) => {
    const users = await User.findOne();
    if(users == null) {
        const rolin = 'admin';
        const firstname = 'Gabriel';
        const middlename = 'Eduardo';
        const lastname = 'Masutier';
        const maidenname = 'Robayo';
        const email = 'masutier@test.com';
        let phone = '3105555555';
        const phoneNum = formatPhone(phone);
        const tydoc = 'cc';
        let cedula = '79396720';
        const cedulaId = formatCedula(cedula);
        const now = new Date();
        const newDate = dateFormat(now, "mmm dd yyyy, h:MM TT");
        const password = '12345';
        const newUser = new User({ rolin, firstname, middlename, lastname, maidenname, tydoc, cedulaId, phoneNum, email, password, newDate });
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
    };
    res.render('logs/signin', { title: 'Ingreso'});
});
        

router.post('/logs/signin', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/signin',
    failureFlash: true
}));


router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
})

module.exports = router;
