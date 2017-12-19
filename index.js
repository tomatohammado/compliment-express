let compliments = [
  'Your instructors love you',
  'High five = ^5',
  'Is it Ruby Tuesday yet?',
  'It\'s almost party o\'clock',
  'The Force is strong with you'
]

let colors = [
  '#FFBF00',
  '#0080FF',
  '#01DF3A',
  '#FF0080'
]

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.set('view engine', 'hbs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (request, response) => {
  let compliment = compliments[Math.floor(Math.random() * compliments.length)]
  let color = colors[Math.floor(Math.random() * colors.length)]
  let name = 'User'

  response.render('index', {compliment, color, name})
  // response.send(`Hello User!<br>${compliments[Math.floor(Math.random() * compliments.length)]}<style>body {background-color: ${colors[Math.floor(Math.random() * colors.length)]}`)
})

app.get('/:name', (request, response) => {
  let compliment = compliments[Math.floor(Math.random() * compliments.length)]
  let color = colors[Math.floor(Math.random() * colors.length)]
  let name = request.params.name

  response.render('index', {compliment, color, name})
  // response.send(`Hello ${request.params.name}!<br>${compliments[Math.floor(Math.random() * compliments.length)]}<style> body {background-color: ${colors[Math.floor(Math.random() * colors.length)]}}</style>`)
})

// app.post('/', (request, response) => {
//   response.send()
// })

app.listen('4000', () => {
  console.log('app is on port 4000')
})
