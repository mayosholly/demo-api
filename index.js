require('dotenv').config()

const Customer = require('../models/Customer');
const mongoose = require('mongoose');

// modules collection
const express = require('express');
const expressLayout = require("express-ejs-layouts");
// const connectDb = require('./server/config/db')


const app = express();
// you need to define the env port in case of production
const port = 5000 || process.env.PORT;

// use the module


// this only allows request where the content type header matches
// they are used in passing form data
app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}));


// static files
app.use(express.static('public'));

// templating engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// home
app.get('/', (req, res) => {
    const newCustomer = new Customer({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        tel: req.body.tel,
        details: req.body.details,
        email: req.body.email,
    })

    res.send("Successfull")

})

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})
