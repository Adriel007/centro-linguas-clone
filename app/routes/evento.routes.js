const upload = require("../middleware/multer");

module.exports = (app) => {
  const eventos = require("../controllers/evento.controller.js");

  let router = require("express").Router();

  router.get("/", eventos.findAll);
  router.get("/:id", eventos.findById);
  router.post(
    "/:userType/:fileType",
    upload.single("im_evento"),
    eventos.createEvento
  ); // Middleware de upload
  router.put("/:id", eventos.updateEvento);
  router.delete("/:id", eventos.deleteEvento);

  app.use("/api/eventos", router);
};
