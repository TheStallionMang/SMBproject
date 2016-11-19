var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// initialize mongoose schemas
require('./models/access');
require('./models/category');
require('./models/customer');
require('./models/employee');
require('./models/inventory');
require('./models/jobTitle');
require('./models/subSystem');
require('./models/transaction');
require('./models/userDetails');
require('./models/vendor');
require('./models/vendorOrder');
var mongoose = require('mongoose');
var dbConfig = require('./db');
mongoose.connect(dbConfig.url);

// All API routes
var routes = require('./routes/index');
var auth = require('./routes/auth')(passport);
var acc = require('./routes/acc');
var cat = require('./routes/cat');
var cust = require('./routes/cust');
var emp = require('./routes/emp');
var inv = require('./routes/inv');
var job = require('./routes/job');
var order = require('./routes/order');
var sub = require('./routes/sub');
var trans = require('./routes/trans');
var user = require('./routes/user');
var vend = require('./routes/vend');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(session({
	secret: 'SESSION SECRET',
  saveUninitialized: true,
  resave: false
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);
app.use('/auth', auth);
app.use('/acc', acc);
app.use('/cat', cat);
app.use('/cust', cust);
app.use('/emp', emp);
app.use('/inv', inv);
app.use('/job', job);
app.use('/order', order);
app.use('/sub', sub);
app.use('/trans', trans);
app.use('/user', user);
app.use('/vend', vend);

// initialize passport
var initPassport = require('./passport-init');
initPassport(passport);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
