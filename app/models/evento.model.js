// Evento model
module.exports = (sequelize, Sequelize) => {
    const Evento = sequelize.define("tb_evento", {
      id_evento: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nm_evento: {
        type: Sequelize.STRING(255)
      },
      // im_evento: {
      //   type: Sequelize.BLOB('long')
      // },
      ds_evento: {
        type: Sequelize.TEXT
      },
      dt_inicio: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      dt_fim: {
        type: Sequelize.DATEONLY,
      },
      id_mural: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    }, {
      tableName: 'tb_evento',
      freezeTableName: true, 
      timestamps: false,
    });
  
    // Evento.associate = (models) => {
    //   Evento.belongsTo(models.Mural, {
    //     foreignKey: 'id_mural',
    //     as: 'tb_mural',
    //   });
    // };
  
    return Evento;
  };
  