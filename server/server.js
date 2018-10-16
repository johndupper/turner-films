const path = require('path')
const express = require('express')
const router = require('./routes/routes')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../client'))

app.use(express.static(path.join(__dirname, '../client')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

module.exports = app
