// Presenca model
module.exports = (sequelize, Sequelize) => {
    const Presenca = sequelize.define("tb_presenca", {
      id_presenca: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      qt_faltas: {
        type: Sequelize.CHAR(1),
        allowNull: false,
      },
      dt_falta: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      id_matricula: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    }, {
      tableName: 'tb_presenca',
      freezeTableName: true, 
      timestamps: false,
    });
  
    // Evento.associate = (models) => {
    //   Presenca.belongsTo(models.Matricula, {
    //     foreignKey: 'id_matricula',
    //     as: 'tb_matricula',
    //   });
    // };
  
    return Presenca;
  };
  