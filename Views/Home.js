const express = require('express')
const path = require('path')
const fs = require('fs')
const Home = express.router();

root = path.join(__dirname, '.');
home.use()
home.get('/', (req, res) => {
    res.redirect('/Home: ' + root);
});
home.get('/Home', (req, res) => {
    console.log('Found Home');
    //res.sendFile(path.join(path.join(__dirname, )))
});