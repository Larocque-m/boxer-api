module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('fights', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      champions: { type: Sequelize.STRING },
      date_of_fight: { type: Sequelize.DATE },
      fighter: { type: Sequelize.STRING },
      outcome: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: { type: Sequelize.DATE },
    })
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('fights')
  }
}
