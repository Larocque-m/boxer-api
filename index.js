const express = require('express')
const bodyParser = require('body-parser')
const {
  getAllFighters, getFighterById, showDocumentation, getFighters, getFighterByName, addNewFighter
} = require('./controller/fights')

const { getMatches, getMatchById, getMatchByOutcome } = require('./controller/matches')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.use(bodyParser.json)

app.get('/', getAllFighters)
app.get('/fighter/:id', getFighterById)
app.get('/documentation', showDocumentation)

app.get('/fighter/', getFighters)
app.get('/fighter/:name', getFighterByName)
app.get('/match', getMatches)
app.get('/match/:identifier', getMatchById)
app.get('/outcome/:outcome', getMatchByOutcome)
app.post('/fighter', addNewFighter)

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1337, () => {
  console.log('Listening on 1337...')
})
