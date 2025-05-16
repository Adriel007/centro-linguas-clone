module.exports = (sequilize, DataTypes) => {
  const Arquivo = sequilize.define("tb_arquivos", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tamanho: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dataUpload: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "tb_usuario",
        key: "id_usuario",
      },
    },
  });

  return Arquivo;
};
