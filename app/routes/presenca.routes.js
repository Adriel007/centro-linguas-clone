module.exports = app => {
    const presencas = require("../controllers/presenca.controller.js");
  
    let router = require("express").Router();
  
    router.get("/", presencas.findAll);
    router.get("/:id", presencas.findById);
    router.post("/", presencas.createPresenca);
    router.put("/", presencas.updatePresenca);
    app.use("/api/presenca", router);
  };
  