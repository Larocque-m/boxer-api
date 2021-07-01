'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('fights', 'snapped', {
      type: Sequelize.BOOLEAN, defaultValue: 0
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('fights', 'snapped')
  }
}
