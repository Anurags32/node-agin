const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter Username</title></head>');
    res.write('<body>');
    res.write('<h1>Hello! This is my first practice</h1>');
    res.write('<form action="/create-user" method="POST">');
    res.write('<input type="text" name="username" />');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body></html>');
    return res.end();
  }

  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><body>');
    res.write('<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>');
    res.write('</body></html>');
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split('=')[1];
      console.log('Received Username:', username);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  }
});

const port =  server.listen(3000);
console.log(`this is port `+port);
