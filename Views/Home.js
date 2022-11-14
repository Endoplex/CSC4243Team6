const express = require('express')
const path = require('path')
const fs = require('fs')
const Home = express.Router();

root = "CSC4243Team6\\React\\HomeModules.js";


Home.get('/', (req, res) => {
    res.redirect('/Home');
    console.log(root);
});
Home.get('/Home', (req, res) => {
    try{ 
        console.log('Found Home: ', root, '\n');
        //res.sendFile(path.join(path.join(root, 'HTML', 'Home.html')));
    } catch(err){
        console.log("Site not found");
    }
});

module.exports = Home;