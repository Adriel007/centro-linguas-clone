const db = require("../models");
const Evento = db.eventos;
const Op = db.Sequelize.Op;

exports.createEvento = async (req, res) => {
  try {
    const eventoData = {
      nm_evento: req.body.nm_evento,
      // im_evento img
      ds_evento: req.body.ds_evento,
      dt_inicio: req.body.dt_inicio,
      dt_fim: req.body.dt_fim,
      id_mural: req.body.id_mural,
    };

    const createdEvento = await Evento.create(eventoData);

    res.status(201).send(createdEvento);
  } catch (err) {
    console.error(err);
    res.status(500).send({
      erro: err.message || "Erro ao cadastrar evento"
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Evento.findAll();
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
  
    const data = await Evento.findByPk(id);

    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Evento com id=${id} não encontrado`
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Erro, evento id=" + req.params.id
    });
  }
};


exports.updateEvento = async (req, res) => {
  const eventoId = req.params.id;

  try {
    const eventoExistente = await Evento.findByPk(eventoId);

    if (!eventoExistente) {
      return res.status(404).send({ erro: "Evento não encontrado." });
    }

    const eventoData = {
      nm_evento: req.body.nm_evento,
      // im_evento:
      ds_evento: req.body.ds_evento,
      dt_inicio: req.body.dt_inicio,
      dt_fim: req.body.dt_fim,
      id_mural: req.body.id_mural,
    };

    await Evento.update(eventoData, {
      where: { id_evento: eventoId }
    });

    const updatedEvento = await Evento.findByPk(eventoId);

    res.status(200).send(updatedEvento);
  } catch (err) {
    console.error(err);
    res.status(500).send({
      erro: err.message || "Erro ao atualizar evento."
    });
  }
};

exports.deleteEvento = async (req, res) => {
  const eventoId = req.params.id;

  try {
    const eventoExistente = await Evento.findByPk(eventoId);

    if (!eventoExistente) {
      return res.status(404).send({ erro: "Evento não encontrado." });
    }

    await Evento.destroy({
      where: { id_evento: eventoId }
    });

    res.status(200).send({ message: "Evento deletado" });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      erro: err.message || "Erro ao deletar evento"
    });
  }
};