const db = require("../models");
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const armazenamento = multer.diskStorage({
	destination: (req, file, cb) => {
		const userType = req.params.userType;
		const fileType = req.params.fileType;
		const dir = `uploads/${userType}/${fileType}`;

		fs.mkdirSync(dir, { recursive: true }); //cria o diretorio caso não exista

		cb(null, dir); //caminho da pasta onde os arquivos serao salvosdsf
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + path.extname(file.originalname)); //pega pelo nome do arquivo salvo
	}
});

const upload = multer({
	storage: armazenamento,
	limits: { fileSize: 100 * 1024 * 1024 },
	fileFilter: (req, file, cb) => {
		const allowedTypes = /jpeg|jpg|pdf|docx|ppt|zip/;
		const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
		const mimetype = allowedTypes.test(file.mimetype);

		if (ext && mimetype) {
			cb(null, true);
		} else {
			cb(new Error('Esse tipo de arquivo não é permitido.'));
		}
	}
});

//simulando chamada no db
const relatorios = {}; //armazena relatorios semestrais
const arquivosPorProfessor = {}; //armazena arquivos por professor especifico

//funçao p relatorio semestral do aluno
exports.getRelatorio = (req, res) => {
	const { id } = req.params;
	const relatorio = relatorios[id];//para obter o relatorio especifico de um aluno

	if (!relatorio) {
		return res.status(404).json({ message: 'RELATÓRIO NÃO ENCONTRADO.' });
	}
	res.json(relatorio);
};

//funçao p obter os arquivos de um professor especifico
exports.getArquivos = (req, res) => {
	const { id } = req.params;
	const arquivo = arquivosPorProfessor[id] || []; //retorna aruivos ou um array vazio
	res.json(arquivo);
};

//funçao para fazer o upload de um arquivo novo
exports.uploadArquivo = async (req, res) => {
	const { id, userType, fileType } = req.params;
	const arquivo = req.file; //multer vai enviar o arquivo

	if (!arquivo) {
		return res.status(400).json({message: 'Nenhum arquivo foi enviado.'}); 
	}
	try {
		const novoArquivo = await db.Arquivo.create({
			nome: arquivo.filename, //nome do arquivo salvo com timestamp
			tamanho: arquivo.fileSize, //tamanho do arquivo
			tipo: arquivo.mimeType, //tipo MIME
			dataUpload: new Date(), //data do upload
			usuarioId: id_professor, //id do prof
			caminho: `uploads/${userType}/${fileType}/${arquivo.filename}` //caminho completo do arquivo
		});

		res.status(201).json({ message: 'Arquivo enviado com sucesso.', arquivo: novoArquivo });
	} catch (Error) {
		console.error(error);
		res.status(500).json({ message: 'Erro ao salvar o arquivo' }); //o arquivo nao foi salvo no banco de dados
	}
};

exports.uploadMiddleware = upload.single('file'); //define o middleware p upload

