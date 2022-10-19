const express = require('express')
const path = require('path')
const fs = require('fs')
const Home = express.Router();

root = path.join(__dirname, '..');
Home.get('/', (req, res) => {
    res.redirect('/Home');
});
Home.get('/Home', (req, res) => {
    console.log('Found Home: \n');
    console.log(root);
    res.sendFile(path.join(path.join(root, 'HTML', 'Home.html')));
});

module.exports = Home;