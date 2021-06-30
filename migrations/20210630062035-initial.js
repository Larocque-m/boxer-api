'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('fights', {
      id: { type: Sequelize.INTEGER, autoincrement: true, primaryKey: true },
      champions: { type: Sequelize.STRING },
      date_of_fight: { type: Sequelize.DATE },
      fighter: { type: Sequelize.STRING },
      outcome: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE') },
      deltetedAT: { type: Sequelize.DATE }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('fights')
  }
}
