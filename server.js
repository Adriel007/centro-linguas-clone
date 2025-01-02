require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { expressCspHeader, NONE, SELF } = require("express-csp-header");
const path = require("path");
const app = express();

// Configurações CORS
const corsOptions = {
  origin: ["http://localhost:8081", "http://localhost"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

// Configuração CSP
const cspOptions = {
  policies: {
    "default-src": [SELF], // Permite recursos da mesma origem
    "connect-src": [SELF, "http://localhost:3333"], // Permite conexões a localhost
    "script-src": [SELF],
    "style-src": [SELF],
    "img-src": [SELF, "data:"], // Permite imagens inline (opcional)
    "font-src": [SELF],
  },
};

// Expor a pasta uploads
app.use("/uploads", express.static("uploads"));

// Configuração CSP
app.use(expressCspHeader(cspOptions));

// Middleware para parsing
app.use(express.json()); // Substitui bodyParser.json()
app.use(express.urlencoded({ extended: true })); // Substitui bodyParser.urlencoded()

// Configuração do favicon
app.get("/favicon.ico", (req, res) => res.status(204).end());

// Sincronização do banco de dados
const db = require("./app/models");
db.sequelize.sync().then(() => {
  console.log("Database synchronized.");
});

// Rotas básicas
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

// Importa e registra rotas
require("./app/routes/aluno.routes")(app);
require("./app/routes/notas.routes")(app);
require("./app/routes/evento.routes")(app);
require("./app/routes/presenca.routes")(app);
require("./app/routes/professor.routes")(app);

// Configuração da porta
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
