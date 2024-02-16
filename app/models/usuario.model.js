// usuario model
module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define("tb_usuario", {
    id_usuario: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nm_usuario: {
      type: Sequelize.STRING
    },
    cd_cpf: {
      type: Sequelize.STRING(11)
    },
    cd_senha: {
      type: Sequelize.STRING(45)
    },
    tp_usuario: {
      type: Sequelize.BOOLEAN
    }
  }, {
    tableName: 'tb_usuario',
    freezeTableName: true, 
    timestamps: false,
  });

  return Usuario;
};
