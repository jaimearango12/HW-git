const express = require('express')
const mongoose = require('mongoose')
const bodyParser= require('body-parser')
const cors = require ('cors')

const meals = require('./routes/meals')
const app = express()
app.use(bodyParser.json())   // app.use añade plugins
app.use(cors())

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true })

    app.use('/api/meals', meals)

module.exports = app