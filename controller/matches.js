const models = require('../models')

const getMatches = async (request, response) => {
  const matches = await models.Matches.findAll({
    attributes: ['id', 'date_of_fight', 'fighter', 'outcome', 'fighterId'],
  })

  return response.send(matches)
}

const getMatchById = async (request, response) => {
  const { identifier } = request.params

  const match = await models.Matches.findAll({
    attributes: ['id', 'date_of_fight', 'fighter', 'outcome', 'fighterId'],
    where: {
      [models.Sequelize.Op.or]: [
        { id: identifier },
        { name: { [models.Sequelize.Op.like]: `%${identifier}%` } },
      ]
    },
    include: [{
      model: models.Fights,
      attributes: ['id', 'name', 'record', 'nationality', 'website'],
    }]
  })

  return match
    ? response.send(match)
    : response.sendStatus(404)
}


const getMatchByOutcome = async (request, response) => {
  const { outcome } = request.params

  const match = await models.Matches.findAll({
    attributes: ['id', 'date_of_fight', 'fighter', 'outcome', 'fighterId'],
    where:
        { outcome: { [models.Sequelize.Op.like]: `%${outcome}%` } },
    include: [{
      model: models.Fights,
      attributes: ['id', 'name', 'record', 'nationality', 'website'],
    }]
  })

  return match
    ? response.send(match)
    : response.sendStatus(404)
}



module.exports = { getMatches, getMatchById, getMatchByOutcome }
