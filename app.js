const http = require('http');

const server = http.createServer((req,res) => {
console.log(req);
process.exit();

});

const port= server.listen(3000);

console.log("this server runing this port"+port)