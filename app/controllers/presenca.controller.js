const db = require("../models");
const Presenca = db.presencas;

exports.findAll = async (req, res) => {
    try {
      const data = await Presenca.findAll();
      res.send(data);
    } catch (err) {
      res.status(500).send({
        message: err.message || 'erro'
      });
    }
};

exports.findById = async (req, res) => {
    const id = req.params.id;
  
    try {
      const data = await Presenca.findByPk(id);
  
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Presença com id=${id} não encontrada`
        });
      }
    } catch (err) {
      res.status(500).send({
        message: "Erro, presença id=" + id
      });
    }
  };  

exports.createPresenca = async (req, res) => {
  try {
    const presencaData = {
      qt_faltas: req.body.qt_faltas,
      dt_falta: req.body.dt_falta,
      id_matricula: req.body.id_matricula,
    };

    const createdPresenca = await Presenca.create(presencaData);

    res.status(201).send(createdPresenca);
  } catch (err) {
    console.error(err);
    res.status(500).send({
      erro: err.message || "Erro ao cadastrar presença"
    });
  }
};

exports.updatePresenca = async (req, res) => {
  const presencaId = req.params.id;

  try {
    const presencaExistente = await Presenca.findByPk(presencaId);

    if (!presencaExistente) {
      return res.status(404).send({ erro: "Presença não encontrado." });
    }

    const presencaData = {
      qt_faltas: req.body.qt_faltas,
      dt_falta: req.body.dt_falta,
    };

    await Presenca.update(presencaData, {
      where: { id_presenca: presencaId }
    });

    const updatedPresenca = await Presenca.findByPk(presencaId);

    res.status(200).send(upda);
  } catch (err) {
    console.error(err);
    res.status(500).send({
      erro: err.message || "Erro ao atualizar presença."
    });
  }
};