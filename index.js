const express = require('express')
const bodyParser = require('body-parser')
const {
  getAllFighters, getFighterById, showDocumentation, getFighters, getFighterByName, addNewFighter
} = require('./controller/fights')

const { getMatches, getMatchById, getMatchByFighter } = require('./controller/matches')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.use(bodyParser.json)

app.get('/', getAllFighters)
app.get('/fighter/:id', getFighterById)
app.get('/documentation', showDocumentation)
app.get('/api/fighter/', getFighters)
app.get('/api/fighter/:name', getFighterByName)

app.get('/api/match', getMatches)
app.get('/api/match/:identifier', getMatchById)
app.get('/api/fighter/:fighter', getMatchByFighter)
app.post('/api/fighter', addNewFighter)

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1337, () => {
  console.log('Listening on 1337...')
})
