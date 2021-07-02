const Sequelize = require('sequelize')
const fightsModel = require('./fights')
const allConfigs = require('../configs/sequelize')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

const fights = fightsModel(connection, Sequelize)

module.exports = { fights }
