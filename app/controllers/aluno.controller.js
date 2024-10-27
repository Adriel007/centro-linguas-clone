const db = require("../models");
const Aluno = db.alunos;
const Usuario = db.usuarios;
const Op = db.Sequelize.Op;

exports.createAluno = async (req, res) => {
  try {
    const usuarioData = {
      nm_usuario: req.body.usuario.nm_usuario,
      cd_cpf: req.body.usuario.cd_cpf,
      cd_senha: req.body.usuario.cd_senha,
      tp_usuario: req.body.usuario.tp_usuario,
    };

    const createdUsuario = await Usuario.create(usuarioData);

    const alunoData = {
      nm_aluno: req.body.nm_aluno,
      cd_cpf: req.body.cd_cpf,
      ds_inst: req.body.ds_inst,
      id_usuario: createdUsuario.id_usuario,
    };

    const createdAluno = await Aluno.create(alunoData);

    res.status(201).send(createdAluno);
  } catch (err) {
    console.error(err);
    res.status(500).send({
      erro: err.message || "Erro ao cadastrar aluno.",
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Aluno.findAll();
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "erro",
    });
  }
};

exports.findById = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Aluno.findByPk(id);

    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Aluno com id=${id} não encontrado`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Erro, aluno id=" + req.params.id,
    });
  }
};

exports.updateAluno = async (req, res) => {
  const alunoId = req.params.id;

  try {
    const alunoExistente = await Aluno.findByPk(alunoId);

    if (!alunoExistente) {
      return res.status(404).send({ erro: "Aluno não encontrado." });
    }

    const usuarioData = {
      nm_usuario: req.body.usuario.nm_usuario,
      cd_cpf: req.body.usuario.cd_cpf,
      cd_senha: req.body.usuario.cd_senha,
      tp_usuario: req.body.usuario.tp_usuario,
    };

    await Usuario.update(usuarioData, {
      where: { id_usuario: alunoExistente.id_usuario },
    });

    const alunoData = {
      nm_aluno: req.body.nm_aluno,
      cd_cpf: req.body.cd_cpf,
      ds_inst: req.body.ds_inst,
      id_usuario: alunoExistente.id_usuario,
    };

    await Aluno.update(alunoData, {
      where: { id_aluno: alunoId },
    });

    const updatedAluno = await Aluno.findByPk(alunoId);

    res.status(200).send(updatedAluno);
  } catch (err) {
    console.error(err);
    res.status(500).send({
      erro: err.message || "Erro ao atualizar aluno.",
    });
  }
};

exports.deleteAluno = async (req, res) => {
  const alunoId = req.params.id;

  try {
    const alunoExistente = await Aluno.findByPk(alunoId);

    if (!alunoExistente) {
      return res.status(404).send({ erro: "Aluno não encontrado." });
    }

    await Aluno.destroy({
      where: { id_aluno: alunoId },
    });

    await Usuario.destroy({
      where: { id_usuario: alunoExistente.id_usuario },
    });

    res.status(200).send({ message: "Aluno deletado" });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      erro: err.message || "Erro ao deletar aluno",
    });
  }
};
