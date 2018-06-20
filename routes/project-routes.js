'use strict'

const Router = require('express').Router
const jsonParser = require('body-parser').json()
const db = require('../lib/db')
const debug = require('debug')('profile:project-router')

const projectRouter = (module.exports = new Router())

projectRouter.get('/api/projects/all', function(req, res, next) {
	debug('GET: /api/projects/all')

	db.query('SELECT * FROM `projects`', function(error, results, fields) {
		res.json(results)
	})
})
