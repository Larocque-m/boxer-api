const Sequelize = require('sequelize')
const allConfigs = require('../configs/sequelize')
const Fights = require('./Fights')

const fightsModel = require('./Fights')
const Matches = require('./Matches')
const matchesModel = require('./Matches')


const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

const fights = fightsModel(connection, Sequelize)
const matches = matchesModel(connection, Sequelize, Fights)

matches.belongsTo(fights)
fights.hasMany(matches)

module.exports = {
  fights,
  matches,
  Sequelize,
}
