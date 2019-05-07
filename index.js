const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

server.listen(80, () => {
  console.log(`Server running at http://${server.address().address}:${server.address().port}/`);
});