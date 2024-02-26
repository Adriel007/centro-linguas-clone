module.exports = (sequelize, Sequelize) => {
  const Notas = sequelize.define(
    "tb_nota",
    {
      id_nota: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      vl_nota: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      id_avaliacao: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      id_matricula: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "tb_nota",
    }
  );

  Notas.associate = (models) => {
    Notas.belongsTo(models.Avaliacao, {
      foreignKey: "id_avaliacao",
      as: "tb_avaliacao",
    });

    Notas.belongsTo(models.Matricula, {
      foreignKey: "id_matricula",
      as: "tb_matricula",
    });
  };

  return Notas;
};
