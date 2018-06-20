'use strict'

const express = require('express')
const debug = require('debug')('profile:server')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')
const util = require('util')
const db = require('./lib/db')

const project = require('./routes/project-routes.js')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(morgan('dev'))

app.use(project)

app.listen(PORT, () => {
	debug(`server on ${PORT}`)
})
