
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

var db = mongoose.connect('mongodb://localhost:27017/bookAPI',function(err){
    if(err)
        throw err;
}); //bookAPI is the name of the database

//Include body parser for posting data
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//app.use(express.static(__dirname + "/public"));


 //Object of the model
var Books = require('./models/bookModel');

var port = process.env.PORT || 6000;


//Books are passes as the parameter so that bookRouter read the Books object
var bookRouter = require('./Routes/bookRoutes')(Books);


//all requests for the Books are rediredtes to the bookRouter
app.use('/api/Books',bookRouter);

app.get('/',function(req,res){
    res.render("index.html");
});

app.listen(port,function(){
   console.log('Gulp is running on port: ' + port);

}); 
