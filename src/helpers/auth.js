
const helpers = {};


helpers.isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()) {
        return next();
    };
    req.flash('error_msg', 'Seeción réstringida, solo para Usuarios registrados');
    res.redirect('/signin');
};


module.exports = helpers;
