// hide database url
require('dotenv').config()

const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/routes')

// express config
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../client'))

app.use(express.static(path.join(__dirname, '../client')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

// mongoose config
const dbUrl = process.env.MONGO_DB_URL
const dbConfig = { useNewUrlParser: true }

mongoose.connect(dbUrl, dbConfig)
  .then(() => { console.log('mongoDB connection established') })
  .catch(error => { console.error(`unable to connect to mongoDB: ${error.message}`) })

module.exports = app
