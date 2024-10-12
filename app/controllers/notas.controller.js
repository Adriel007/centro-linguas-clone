const db = require("../models");
const Notas = db.notas;

exports.createNota = async (req, res) => {
  try {
    const notaData = {
      vl_nota: req.body.vl_nota,
      id_avaliacao: req.body.id_avaliacao,
      id_matricula: req.body.id_matricula,
    };

    const createdNota = await Notas.create(notaData);

    res.status(201).send(createdNota);
  } catch (err) {
    console.error(err);
    res.status(500).send({
      erro: err.message || "Erro ao cadastrar nota.",
    });
  }
};

exports.findNota = async (req, res) => {
  const id = req.params.id;

  try {
    const foundNota = await Notas.findByPk(id);

    if (foundNota) {
      res.send(foundNota);
    } else {
      res.status(404).send({
        message: `Nota com o ID ${id} não encontrada.`,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({
      erro: err.message || "Erro ao buscar nota.",
    });
  }
};
