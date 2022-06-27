
//traer rutas
const routes = require('./routes/iroutes')
const cors = require('cors')

console.log("holAAAA")
require('dotenv').config()
const {PORT} = require('./config/config')

//express
const express = require('express')

const app = express()
app.use(express.json())

//cors
app.use(cors())


//ajustes
app.set('PORT',PORT)

//rutas
// se puede agregar ('/ruta',routes)
app.use(routes)


module.exports = app