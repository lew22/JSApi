
//traer rutas
const routes = require('./routes/iroutes')

console.log("holAAAA")
require('dotenv').config()
const {PORT} = require('./config/config')

//express
const express = require('express')

const app = express()
app.use(express.json())

//ajustes
app.set('PORT',PORT)

//rutas
// se puede agregar ('/ruta',routes)
app.use(routes)


module.exports = app