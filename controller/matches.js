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


const getMatchByFighter = async (request, response) => {
  const { fighter } = request.params

  const match = await models.Matches.findAll({
    attributes: ['id', 'date_of_fight', 'fighter', 'outcome', 'fighterId'],
    where:
        { fighter: { [models.Sequelize.Op.like]: `%${fighter}%` } },
    include: [{
      model: models.Fights,
      attributes: ['id', 'name', 'record', 'nationality', 'website'],
    }]
  })

  return match
    ? response.send(match)
    : response.sendStatus(404)
}



module.exports = { getMatches, getMatchById, getMatchByFighter }
