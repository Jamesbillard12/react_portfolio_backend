'use strict'

const express = require('express')
const debug = require('debug')('profile:server')
const dotenv = require('dotenv')
dotenv.load()
const morgan = require('morgan')
const cors = require('cors')
const util = require('util')

const project = require('./routes/project-routes.js')
const app = express()
const PORT = process.env.PORT || 3000
console.log(PORT)
const CORS_ORIGINS = process.env.CORS_ORIGINS

app.use(
	cors({
		origin: CORS_ORIGINS.split(' '),
		credentials: true
	})
)
app.use(morgan('dev'))

app.use(project)

app.listen(PORT, () => {
	debug(`server on ${PORT}`)
})
