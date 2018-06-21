var mysql = require('mysql')
var connection = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DATABASE
})

connection.connect(function(err) {
	if (err) throw err
})

module.exports = connection
