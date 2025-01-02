const db = require("../models");
const Evento = db.eventos;
const Op = db.Sequelize.Op;

exports.createEvento = async (req, res) => {
  try {
    const eventoData = {
      nm_evento: req.body.nm_evento,
      im_evento: req.file ? req.file.path : null,
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
      erro: err.message || "Erro ao cadastrar evento",
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const eventos = await Evento.findAll();
    const eventosComUrl = eventos.map((evento) => ({
      ...evento.dataValues,
      im_evento_url: evento.im_evento
        ? `${req.protocol}://${req.get("host")}/${evento.im_evento}`
        : null,
    }));

    res.send(eventosComUrl);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Erro ao buscar eventos.",
    });
  }
};

exports.findById = async (req, res) => {
  const id = req.params.id;

  try {
    const evento = await Evento.findByPk(id);

    if (evento) {
      res.send({
        ...evento.dataValues,
        im_evento_url: evento.im_evento
          ? `${req.protocol}://${req.get("host")}/${evento.im_evento}`
          : null,
      });
    } else {
      res.status(404).send({
        message: `Evento com id=${id} não encontrado.`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Erro ao buscar evento com id=" + id,
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
      where: { id_evento: eventoId },
    });

    const updatedEvento = await Evento.findByPk(eventoId);

    res.status(200).send(updatedEvento);
  } catch (err) {
    console.error(err);
    res.status(500).send({
      erro: err.message || "Erro ao atualizar evento.",
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
      where: { id_evento: eventoId },
    });

    res.status(200).send({ message: "Evento deletado" });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      erro: err.message || "Erro ao deletar evento",
    });
  }
};
