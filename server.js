//console.log('Welcome to oklabs');

//1. Import Area

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/hello', function (req, res) {
    res.send('Good Morning Everyone')
})

app.get('/anjali', function (req, res) {
    res.send('How are you ?')
})

app.get('/kiran', function (req, res) {
    res.send('How are you kiran?')
})

app.listen(4000)