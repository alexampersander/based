require("newrelic");
var bcrypt = require('bcryptjs'),
    express = require("express"),
    mongoose = require("mongoose"),
    app = express(),
    db = mongoose.connection,
    Schema = mongoose.Schema;
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.render('index');
});
app.get('/404', function(req, res){
    res.render('404');
});
app.get('/contact', function(req, res){
    res.render('contact');
});
app.get('/list', function(req, res){
    res.render('list');
});
app.get('/reasons', function(req, res){
    res.render('reasons');
});

app.get('/signup', function(req, res){
    res.render('signup');
});

app.get('/login', function(req, res){
    res.render('login');
});

app.get('*', function(req, res){
    res.render('404');
});

var port = process.env.PORT || 80;
app.listen(port, function() {
    console.log("Listening on " + port);
});