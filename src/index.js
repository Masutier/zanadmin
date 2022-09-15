const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const hbsHelpers = require('handlebars-helpers');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const dateFormat = require('dateformat');


// Initializations
const app = express();
require('./database');
require('./config/passport');


// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultsLayout: 'main',
    helpersDir: path.join(app.get('views'), 'helpers'),
    layoutsDir: path.join(app.get('views'), 'layouts'),
    logsDir: path.join(app.get('views'), 'logs'),
    partialsDir: path.join(app.get('views'), 'partials'),
    proyectosDir: path.join(app.get('views'), 'proyectos'),
    usersDir: path.join(app.get('views'), 'users'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'softgartenzanadmin',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'static')));
app.use(flash());
app.get('*', function (req, res, next){
    res.locals.user = req.user || null;
    next();
});


// Global Variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});


// Routes
app.use(require('./routes/costales'));

app.use(require('./routes/encuestas'));

app.use(require('./routes/index'));

app.use(require('./routes/loger'));

app.use(require('./routes/productos'));

app.use(require('./routes/proyectos'));

app.use(require('./routes/users'));

app.use(require('./routes/test'));

// Server is listening
app.listen(app.get('port'), () => {
    console.log('server Up in port ', app.get('port'));
});
