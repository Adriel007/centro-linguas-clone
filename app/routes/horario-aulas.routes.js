const horario_aulasController = require("../controllers/horario-aulas.controller");

module.exports = app => {
    app.get("/horarios", horario_aulasController.all);
    app.get("/horarios/:id", horario_aulasController.id);
};