// Package Imports
const express = require('express')
const mysql = require('mysql')
const path = require('path')
const bodyParser = require('body-parser')
const fs = require('fs')

// File Imports
const connection = require('./database')

const app = express()
const PORT = process.env.PORT || 5050

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.get('/', (req, res) => {
    fs.readFile('index.html', 'utf-8', (err, data) => {
        if (err) {
            throw err
        } else {
            res.end(data)
        }
    })
})

app.get('/api/getCustomers', (req, res) => {
    let sql = "SELECT * FROM TEST"
    connection.query(sql, (err, results) => {
        if (err) {
            throw err
        } else {
            res.send(results)
        }
    })
})

app.post('/api/addCustomer', (req, res) => {
    var firstName = req.body.firstName
    var lastName = req.body.lastName
    var sql = "INSERT INTO TEST (first_name, last_name) VALUES ('"+firstName+"','"+lastName+"')"
    connection.query(sql, (err, results) => {
        if (err) {
            throw err
        } else {
            res.redirect('/')
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}`)
    connection.connect((err) => {
        if (err) {
            throw err
        } else {
            console.log('Database is connected')
        }
    })
})