const models = require('../models')


const getALlChampions = (request, response) => {
  try {
    const fights = await models.fights.findAll()

    return response.send(fights)
  } catch (error) {
    return response.status(500).send('Unable to retrieve villains, please try again')
  }
}

module.exports= { getALlChampions }