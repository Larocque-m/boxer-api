const Matches = (connection, Sequelize, Fights) => {
  return connection.define('matches', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    date_of_fight: { type: Sequelize.DATE },
    fighter: { type: Sequelize.STRING },
    outcome: { type: Sequelize.STRING },
    fighterId: { type: Sequelize.INTEGER, references: { model: Fights, key: 'id' } },
  }, { paranoid: true })
}

module.exports = Matches
