const path      = require('path');
const express   = require('express');
const shoperoutes = express.Router();

shoperoutes.get('/add-shope', (req, res, next) => {
    console.log("product...........");
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = shoperoutes;