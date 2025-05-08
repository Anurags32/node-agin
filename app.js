const http = require('http');
const path = require('path');
const route=require('./routes/product_routes');
const shoperoutes=require('./routes/shope');
const  express = require('express');

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(shoperoutes);
app.use(route);
app.use((req,res,next)=>{
  res.sendFile(path.join(__dirname, 'views', '404.html'));
  // res.status(404).send('<h1>Page not found</h1>');
  console.log("page not found");
});
app.listen(8000);