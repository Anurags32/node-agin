const http = require('http');

const  express = require('express');

const app = express();

app.use('/',(req,res,next)=>{

    console.log("express is first url");
    next();
});
app.use('/add-product',(req,res,next)=>{
    res.send(`
        <form action="/add-product" method="POST">
          <input type="text" name="title" placeholder="Product Title">
          <button type="submit">Add Product</button>
        </form>
      `);
    console.log("express is second url");
});

// const server = http.createServer((req,res) => {
// console.log(req);
// process.exit();

// });

// const port= server.listen(3000);

// console.log("this server runing this port"+port)

app.listen(3000);