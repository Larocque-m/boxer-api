module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('fights', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING },
      record: { type: Sequelize.STRING },
      nationality: { type: Sequelize.STRING },
      website: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: { type: Sequelize.DATE },
    })

    return queryInterface.createTable('matches', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      date_of_fight: { type: Sequelize.DATE },
      fighter: { type: Sequelize.STRING },
      outcome: { type: Sequelize.STRING },
      fighterId: { type: Sequelize.INTEGER, references: { model: 'fights', key: 'id' } },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE, },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('matches')

    return queryInterface.dropTable('fights')
  }
}


