const fights = (connection, Sequelize) => {
  return connection.define('fights',
    {
      id: { type: Sequelize.INTEGER, autoincrement: true, primaryKey: true },
      champions: { type: Sequelize.STRING },
      date_of_fight: { type: Sequelize.DATE },
      fighter: { type: Sequelize.STRING },
      outcome: { type: Sequelize.STRING },
    }, { paranoid: true })
}

module.exports = fights
