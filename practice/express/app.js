const express = require('express');

const app = express();

app.use('/',(req,res,next) => {
    res.send('<h1>Jai Shree Ram</h1>');
    console.log("first rout");
    
    // next();
});

app.use('/user',(req,res,next)=>{
    res.send('<h1>Hello User</h1>');
});

app.listen(3000,()=>{
    console.log("server runing this port 30000");
});