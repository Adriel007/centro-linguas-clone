const notas = require("../controllers/notas.controller");

module.exports = (app) => {
  let router = require("express").Router();

  router.post("/:id/notas", notas.createNota);
  router.get("/:id/notas", notas.findNota);

  app.use("/api/alunos", router);
};
