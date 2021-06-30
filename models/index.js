const Sequelize = require('sequelize')
const fightsModel = require('./fights')

const connection = new Sequelize('fights', 'newUser', 'Champ$$$',
  { host: 'localhost', dialect: 'mysql' })

const fights = fightsModel(connection, Sequelize)

module.exports = { fights }
