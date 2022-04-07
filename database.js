const mysql = require('mysql')

const keys = require('./config')

const connection = mysql.createConnection({
    host: keys.mysqlKeys.host,
    user: keys.mysqlKeys.user,
    password: keys.mysqlKeys.pass,
    database: keys.mysqlKeys.db
})

module.exports = connection