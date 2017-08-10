var express=require('express');
var todoController=require('./controllers/todocontroller');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app=express();

//set static files

app.use(express.static('./public'))

//set view/template engine(ejs)

app.set('view engine','ejs');

todoController(app);

//listen to port

app.listen(3000);

console.log("Server connected");