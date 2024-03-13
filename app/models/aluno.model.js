// aluno model
module.exports = (sequelize, Sequelize) => {
  const Aluno = sequelize.define("tb_aluno", {
    id_aluno: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nm_aluno: {
      type: Sequelize.STRING
    },
    cd_cpf: {
      type: Sequelize.STRING(11)
    },
    ds_inst: {
      type: Sequelize.STRING(255)
    },
    id_usuario: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'tb_aluno',
    freezeTableName: true, 
    timestamps: false,
  });

  Aluno.associate = (models) => {
    Aluno.belongsTo(models.Usuario, {
      foreignKey: 'id_usuario',
      as: 'tb_usuario',
    });
  };

  return Aluno;
};
