var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('./auth/passport_config.js');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'blogServer',
  cookie: {
    maxAge: 300000
  },
  resave: false,
  saveUninitialized: false
}));

app.use(cors({
  origin: ['http://localhost:8080','http://localhost'],
  methods: ['GET','POST','PUT']
}));

app.use(passport.initialize());
app.use(passport.session());

// app.use('/users', function(req, res, next) {
//   if(req.url == '/login' || req.url == '/register' ) {
//     return next();
//   }
//   if(req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect('/');
// });

app.use('/', index);
app.use('/users', users);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
