const horariosController = require("../controllers/horarios.controller");

module.exports = app => {
    app.get("/horarios", horariosController.all);
    app.get("/horarios/:id", horariosController.id);
};