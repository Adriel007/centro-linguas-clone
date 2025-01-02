const multer = require("multer");
const path = require("path");
const fs = require("fs");

//fun�ao pra criar os subdiretorios com base no tipo de usuario e o tipo de arquivo
const armazenamento = multer.diskStorage({
  destination: (req, file, cb) => {
    const userType = req.params.userType; //tipo aluno, professor, administrador
    const fileType = req.params.fileType; //tipo tarefas, materiais didaticos, certificados, etc

    const dir = `uploads/${userType}/${fileType}`;

    fs.mkdirSync(dir, { recursive: true }); //cria o diretorio, caso nao exista

    cb(null, dir); //define o diretorio de destino para o arquivo
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); //nome do arquivo com horario
  },
});

//fun�ao para filtrar e limitar o tamanho do arquivo permitido
const upload = multer({
  storage: armazenamento,
  limits: { fileSize: 100 * 1024 * 1024 }, //limite de 100mb
  fileFilter: (req, file, cb) => {
    const allowedTypes =
      /jpeg|jpg|pdf|docx|ppt|zip|doc|xlsx|xls|txt|csv|mp3|mp4|wav|ogg|png|gif|pptx/;
    const ext = allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = allowedTypes.test(file.mimetype);

    if (ext && mimetype) {
      cb(null, true);
    } else {
      cb(new Error("Esse tipo de arquivo não é permitido."));
    }
  },
});
module.exports = upload;
