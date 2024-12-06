module.exports = app => {
    const professorController = require("../controllers/professor.controller.js");
    const upload = require("../middleware/multer");
    let router = require("express").Router();

    //rotas
    router.get('/:id/relatorio', professorController.getRelatorio); //relatorio semestral de um aluno 
    router.get('/:id/arquivos', professorController.getArquivos); //arquivos disponiveis para o professor
    router.post('/:id/:userType/:fileType/arquivos', upload.single('file'), professorController.uploadArquivo); //faz o upload de um arquivo novo para o sistema
    app.use("/api/professores", router);
};