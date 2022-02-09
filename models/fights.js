const Fights = (connection, Sequelize) => {
  return connection.define('fights',
    {
      id: { type: Sequelize.INTEGER, autoincrement: true, primaryKey: true },
      name: { type: Sequelize.STRING },
      record: { type: Sequelize.DATE },
      nationality: { type: Sequelize.STRING },
      website: { type: Sequelize.STRING },
      snapped: { type: Sequelize.BOOLEAN, defaultValue: 0 }
    }, { paranoid: true })
}

module.exports = Fights
