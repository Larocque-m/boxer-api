const express = require('express')
const app = express()
const fights = require('./fights')

app.set('view engine', 'pug')

app.use(express.static('public'))


app.get('/', (request, response) => {
  response.render('index', { fights })
})


app.all('*', (request, response) => {
  return response.sendStatus(404)
})


app.listen(1337, () => {
  console.log('Listening on 1337...')
})