const express = require('express')
const app = express()
const fights = require('./fights')
const { getALlChampions, getFighter } = require('./controller/fights')

app.set('view engine', 'pug')

app.use(express.static('public'))


app.get('/', (request, response) => {
  response.render('index', { fights })
})

app.get('/fights', getALlChampions)
app.get('/fights/:id', getFighter)

app.all('*', (request, response) => {
  return response.sendStatus(404)
})


app.listen(1337, () => {
  console.log('Listening on 1337...')
})
