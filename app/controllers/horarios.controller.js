exports.all = (req, res) => {
    res.send("Horario Aulas");
};

exports.id = (req, res) => {
    const id = req.params.id;
    res.send('horario do aluno com ID: ' + id);
};