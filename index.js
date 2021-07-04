const express = require('express')
const fights = require('./fights')
const { getALlChampions, showDocumentation, getFighter } = require('./controller/fights')

const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/', (request, response) => {
  return response.render('index', { fights })
})

app.get('/singleFights/:id', (request, response) => {
  const { id } = request.params
  const match = fights.find((match) => match.number === parseInt(id))

  return response.render('singleFights', { match })
})
app.get('/documentation', showDocumentation)
app.get('/fights', getALlChampions)
app.get('/fights/:id', getFighter)

app.all('*', (request, response) => {
  return response.sendStatus(404)
})


app.listen(1337, () => {
  console.log('Listening on 1337...')
})
