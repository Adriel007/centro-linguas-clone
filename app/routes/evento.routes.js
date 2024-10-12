module.exports = app => {
    const eventos = require("../controllers/evento.controller.js");
  
    let router = require("express").Router();
  
    router.get("/", eventos.findAll);
    router.get("/:id", eventos.findById);
    router.post("/", eventos.createEvento);
    router.put("/", eventos.updateEvento);
    router.delete("/:id", eventos.deleteEvento);
    app.use("/api/eventos", router);
  };
  