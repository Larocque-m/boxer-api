const Sequelize = require('sequelize')
const allConfigs = require('../configs/sequelize')

const FightsModel = require('./Fights')
const MatchesModel = require('./Matches')

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

const Fights = FightsModel(connection, Sequelize)
const Matches = MatchesModel(connection, Sequelize, Fights)

Matches.belongsTo(Fights)
Fights.hasMany(Matches)

module.exports = {
  Fights,
  Matches,
  Sequelize,
}
