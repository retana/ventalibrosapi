//Imports
const express    = require("express");
const bodyParser = require("body-parser");
const database   = require("mongoose");
const config     = require("./config");

//Database Config
database.connect(config.connectionString);

//Server Config
const app   = express();
const port  = 3000;

//content JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Routes
app.use('/',require('./routes')());

app.listen(port,()=>console.log('WebAPI - Iniciado en el puerto '+port));
//Server Start
