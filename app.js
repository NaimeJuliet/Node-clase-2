const express = require('express')
const app = express()

require('dotenv').config()
console.log(process.env.PORT) // remove this after you've confirmed it working

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/', function (req, res) {
    res.send('HOLA MI NOMBRE ES FRAILEJON ERNESTO PEREZ')
  })

app.listen(process.env.PORT,function(){
    console.log("SERVIDOR ENCENDIDO")
})