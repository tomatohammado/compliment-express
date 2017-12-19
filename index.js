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
const app = express()

app.get('/', (request, response) => {
  response.send(`Hello User!<br>${compliments[Math.floor(Math.random() * compliments.length)]}<style>body {background-color: ${colors[Math.floor(Math.random() * colors.length)]}`)
})

app.get('/:name', (request, response) => {
  response.send(`Hello ${request.params.name}!<br>${compliments[Math.floor(Math.random() * compliments.length)]}<style> body {background-color: ${colors[Math.floor(Math.random() * colors.length)]}}</style>`)
})

app.listen('4000', () => {
  console.log('app is on port 4000')
})
