module.exports = app => {
    const alunos = require("../controllers/aluno.controller.js");
  
    let router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", alunos.createAluno);
    router.get("/:id", alunos.findById);
    router.get("/", alunos.findAll);
    router.put("/:id", alunos.updateAluno);
    router.delete("/:id", alunos.deleteAluno);
    app.use("/api/alunos", router);
  };
  