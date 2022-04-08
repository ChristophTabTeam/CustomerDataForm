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
app.use(express.static(path.resolve(__dirname, './client/build')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

app.get('/submited', (req, res) => {
    fs.readFile('index.html', 'utf-8', (err, data) => {
        if (err) {
            throw err
        } else {
            res.end(data)
        }
    })
})

app.get('/Datenschutz', (req, res) => {
    fs.readFile('datenschutz.html', 'utf-8', (err, data) => {
        if (err) {
            throw err
        } else {
            res.end(data)
        }
    })
})

app.get('/api/getCustomers', (req, res) => {
    let sql = "SELECT * FROM CUSTOMERS"
    connection.query(sql, (err, results) => {
        if (err) {
            throw err
        } else {
            res.send(results)
        }
    })
})

app.post('/api/addCustomer', (req, res) => {
    var companyName = req.body.companyName
    var website = req.body.website
    var email1 = req.body.email1
    var email1Tag = req.body.email1Tag
    var phone1 = req.body.phone1
    var phone1Tag = req.body.phone1Tag
    var streetName = req.body.streetName
    var streetNumber = req.body.streetNumber
    var cityZip = req.body.cityZip
    var cityName = req.body.cityName
    var country = req.body.country
    var firstName = req.body.firstName
    var lastName = req.body.lastName
    var position = req.body.position
    var email2 = req.body.email2
    var email2Tag = req.body.email2Tag
    var email3 = req.body.email3 || ''
    var email3Tag = req.body.email3Tag || ''
    var phone2 = req.body.phone2
    var phone2Tag = req.body.phone2Tag
    var phone3 = req.body.phone3 || ''
    var phone3Tag = req.body.phone3Tag || ''
    var sql = "INSERT INTO customers (first_name, last_name, company_name, street_name, street_number, city_name, city_zip, country, email_1, email_1_tag, email_2, email_2_tag, email_3, email_3_tag, phone_1, phone_1_tag, phone_2, phone_2_tag, phone_3, phone_3_tag, website, position) VALUES ('"+firstName+"','"+lastName+"', '"+companyName*"', '"+streetName+"', '"+streetNumber+"', '"+cityName+"', '"+cityZip+"', '"+country+"', '"+email1+"', '"+email1Tag+"', '"+email2+"', '"+email2Tag+"', '"+email3+"', '"+email3Tag+"', '"+phone1+"', '"+phone1Tag+"', '"+phone2+"', '"+phone2Tag+"', '"+phone3+"', '"+phone3Tag+"', '"+website+"', '"+position+"')"
    connection.query(sql, (err, results) => {
        if (err) {
            throw err
        } else {
            res.redirect('/submited')
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