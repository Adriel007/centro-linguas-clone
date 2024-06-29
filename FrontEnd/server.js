// server.js

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Assumindo que seu arquivo db.json está na raiz do projeto
const middlewares = jsonServer.defaults();

// Middleware para ajustar o cabeçalho Content-Type
server.use((req, res, next) => {
  res.header('Content-Type', 'application/json; charset=utf-8');
  next();
});

server.use(middlewares);
server.use(router);

const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
