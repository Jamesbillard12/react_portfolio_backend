'use strict'

const express = require('express')
const debug = require('debug')('profile:server')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(morgan('dev'))

app.listen(PORT, () => {
	debug(`server on ${PORT}`)
})
