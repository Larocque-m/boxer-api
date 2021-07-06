const models = require('../models')


const getAllFighters = async (request, response) => {
  try {
    const fights = await models.Fights.findAll()

    response.render('index', { fights })
  } catch (error) {
    return response.status(500).send('Unable to retrieve home page')
  }
}

const getFighterById = async (request, response) => {
  try {
    const { id } = request.params

    const fighter = await models.Fights.findOne({
      where: { id },
      include: [{ model: models.Matches }]
    })

    return response.render('fighter', { fighter })
  } catch (error) {
    return response.status(500).send('Unable to retrieve fighter page')
  }
}

const showDocumentation = (request, response) => response.render('documentation')

const getFighters = async (request, response) => {
  try {
    const fighters = await models.Fights.findAll({
      attributes: ['id', 'name', 'record', 'nationality', 'website'],
      include: [{
        model: models.Matches,
        attributes: ['id', 'date_of_fight', 'fighter', 'outcome', 'fighterId']
      }]
    })

    return response.send(fighters)
  } catch (error) {
    return response.status(500).send('Unable to retrieve fighter list')
  }
}

const getFighterByName = async (request, response) => {
  try {
    const { name } = request.params

    const fighter = await models.Fights.findAll({
      attributes: ['id', 'name', 'record', 'nationality', 'website'],
      where: {
        name: { [models.Sequelize.Op.like]: `%${name}%` }
      },
      include: [{
        model: models.Matches,
        attributes: ['id', 'date_of_fight', 'fighter', 'outcome', 'fighterId']
      }]
    })

    return fighter
      ? response.send(fighter)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve fighter, please try again')
  }
}

const addNewFighter = async (request, response) => {
  try {
    const {
      name, record, nationality, website
    } = request.body

    if (!name || !record || !nationality || !website) {
      return response.status(400)
        .send('The following fields are required: name, record, nationality, website')
    }

    const newFighter = {
      name, record, nationality, website
    }

    const fighter = await models.Breweries.create(newFighter)

    return response.status(201).send(fighter)
  } catch (error) {
    return response.status(500).send('Unable to add new fighter, please try again')
  }
}


module.exports = {
  getAllFighters,
  getFighterById,
  showDocumentation,
  getFighters,
  getFighterByName,
  addNewFighter
}
