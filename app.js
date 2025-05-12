const http = require('http');
const path = require('path');
const route=require('./routes/product_routes');
const shoperoutes=require('./routes/shope');
const  express = require('express');
const errorcontroller = require('./controllers/error_controller');

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(shoperoutes);
app.use(route);
app.use(errorcontroller.errorcontroller);
app.listen(8000);