const models = require('../models')


const getALlChampions = async (request, response) => {
  const fights = await models.fights.findAll()

  return response.send(fights)
}

const getFighter = async (request, response) => {
  const { id } = request.params

  const foundFighter = await models.fights.findOne({
    attributes: ['id', 'champions', 'date_of_fight', 'fighter', 'outcome']
  //   where: {
  //     [models.Op.or]: [
  //       { id: id },
  //       { name: { [models.Op.like]: `%${id}%` } }
  //     ]
  //   }
  })

  return foundFighter
}

module.exports = { getALlChampions, getFighter }
