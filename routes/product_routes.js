const express = require('express');
const productrouter = express.Router();

productrouter.use('/get-product', (req, res, next) => {
    res.send(`
        <form action="/add-product" method="POST">
          <input type="text" name="title" placeholder="Product Title">
          <button type="submit">Add Product</button>
        </form>
      `);
    console.log("express is second url");
});

module.exports = productrouter;