const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

// Configurando a conexão com o banco de dados
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    pool: dbConfig.pool,
  }
);

const db = {};

// Configurando os modelos
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Registrando os modelos
db.usuarios = require("./usuario.model.js")(sequelize, Sequelize);
db.alunos = require("./aluno.model.js")(sequelize, Sequelize);
db.notas = require("./notas.model.js")(sequelize, Sequelize);
db.eventos = require("./evento.model.js")(sequelize, Sequelize);
db.presencas = require("./presenca.model.js")(sequelize, Sequelize);
db.arquivo = require("./arquivos.model.js")(sequelize, Sequelize.DataTypes);

module.exports = db;
