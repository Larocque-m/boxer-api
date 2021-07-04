const models = require('../models')


const getALlChampions = async (request, response) => {
  const fights = await models.fights.findAll()

  return response.send(fights)
}

const showDocumentation = (request, response) => response.render('documentation')


const getFighter = async (request, response) => {
  const { id } = request.params

  const foundFighter = await models.fights.findOne({
    attributes: ['id', 'champions', 'date_of_fight', 'fighter', 'outcome']
  })

  return foundFighter
}

module.exports = { getALlChampions, getFighter, showDocumentation }
