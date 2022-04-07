// Package Imports
const express = require('express')
const mysql = require('mysql')
const path = require('path')
const bodyParser = require('body-parser')

// File Imports
const keys = require('./config')

const app = express()
const PORT = process.env.PORT || 5050

const connection = mysql.createConnection({
    host: keys.mysqlKeys.host,
    user: keys.mysqlKeys.user,
    password: keys.mysqlKeys.pass,
    database: keys.mysqlKeys.db
})

app.listen(PORT, () => console.log(`Server is listening on Port ${PORT}`))